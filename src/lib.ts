/* eslint-disable no-param-reassign */
import { useMemo, useCallback, useState } from 'react';
import { useDeepCompareEffect } from 'ahooks';
import type {
  ProcessedTreeData,
  ProcessedTreeNode,
  TreeData,
  TreeValue,
} from './types';

/**
 * 构建树结构，为每个节点添加 key 和路径信息
 */
export const buildTree = (nodes?: TreeData): ProcessedTreeData | undefined => {
  if (!nodes) {
    return;
  }

  // 为每个层级分配统一的 ident
  const levelToIdent = new Map<number, string>();

  const getIdentForLevel = (level: number): string => {
    if (!levelToIdent.has(level)) {
      levelToIdent.set(level, String(levelToIdent.size));
    }

    return levelToIdent.get(level) as string;
  };

  const processNode = (
    node: ProcessedTreeNode,
    parentKey: string,
    parentPath: ProcessedTreeNode[],
    level: number,
  ): void => {
    node.key = parentKey ? `${parentKey}/${node.value}` : node.value;

    if (node.ident === undefined) {
      node.ident = getIdentForLevel(level);
    }

    Object.defineProperty(node, '$path', {
      value: [
        ...parentPath.map((n) => ({ value: n.value, ident: n.ident ?? '' })),
        { value: node.value, ident: node.ident },
      ],
      enumerable: false,
    });

    if (node.children) {
      node.children.forEach((children) => {
        processNode(children, node.key, [...parentPath, node], level + 1);
      });
    }
  };

  nodes.forEach((node) => {
    processNode(node as ProcessedTreeNode, '', [], 0);
  });

  return nodes as ProcessedTreeData;
};

/**
 * 在树中查找节点
 */
const findNode = (
  nodes: ProcessedTreeData,
  value: string,
  ident?: string,
): ProcessedTreeNode | null => {
  for (const node of nodes) {
    if (node.value === value && (ident === undefined || node.ident === ident)) {
      return node;
    }

    if (node.children) {
      const found = findNode(node.children, value, ident);

      if (found) {
        return found;
      }
    }
  }

  return null;
};

/**
 * 解析 value 获取完整节点路径
 */
const resolveValuePath = (
  val: TreeValue | undefined,
  treeData: ProcessedTreeData,
): ProcessedTreeNode[] => {
  if (!val || typeof val !== 'object') {
    return [];
  }

  // 获取 ident 层级信息并按层级排序
  const entries = Object.entries(val)
    .map(([ident, value]) => {
      let level: number | undefined;

      const findLevel = (
        nodes: ProcessedTreeNode[],
        depth: number,
      ): boolean => {
        for (const node of nodes) {
          if (node.ident === ident && level === undefined) {
            level = depth;

            return true;
          }

          if (node.children && findLevel(node.children, depth + 1)) {
            return true;
          }
        }

        return false;
      };

      findLevel(treeData, 0);

      return { ident, value, level };
    })
    .filter(({ level }) => level !== undefined);

  if (entries.length === 0) {
    return [];
  }

  entries.sort((a, b) => (a.level ?? 0) - (b.level ?? 0));

  // 逐层查找并验证路径
  const path: ProcessedTreeNode[] = [];
  let currentLevel = treeData;

  for (const { ident, value } of entries) {
    const node = findNode(currentLevel, value, ident);

    if (!node) {
      return [];
    }

    // 验证路径匹配
    const expectedIndex = path.length;
    const pathItem = node.$path[expectedIndex];

    if (!pathItem || pathItem.value !== value || pathItem.ident !== ident) {
      return [];
    }

    path.push(node);
    currentLevel = node.children ?? [];
  }

  return path;
};

// Hooks

export const useTreeData = (options?: TreeData) => {
  return useMemo(() => buildTree(structuredClone(options)), [options]);
};

export const useTreeSelection = (
  treeData: ProcessedTreeData | undefined,
  value: TreeValue | undefined,
  onChange?: (value: TreeValue) => void,
) => {
  const nodePath = useMemo(
    () => resolveValuePath(value, treeData ?? []),
    [value, treeData],
  );

  const selectedKeys = useMemo(() => {
    const lastNode = nodePath.at(-1);

    return lastNode ? [lastNode.value] : [];
  }, [nodePath]);

  const parentKeys = useMemo(
    () => nodePath.slice(0, -1).map((n) => n.value),
    [nodePath],
  );

  const handleSelect = useCallback(
    (keys: React.Key[]) => {
      if (keys[0] === undefined) {
        return;
      }

      const node = findNode(treeData ?? [], String(keys[0]));

      if (!node) {
        return;
      }

      const newValue: TreeValue = {};
      node.$path.forEach(({ ident, value: nodeValue }) => {
        newValue[ident] = nodeValue;
      });

      onChange?.(newValue);
    },
    [treeData, onChange],
  );

  return { selectedKeys, parentKeys, handleSelect };
};

export const useTreeExpansion = (
  parentKeys: React.Key[],
  value: TreeValue | undefined,
) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);

  useDeepCompareEffect(() => {
    setExpandedKeys((prev) => [...new Set([...prev, ...parentKeys])]);
  }, [value]);

  const handleExpand = useCallback((keys: React.Key[]) => {
    setExpandedKeys(keys);
  }, []);

  return { expandedKeys, handleExpand };
};
