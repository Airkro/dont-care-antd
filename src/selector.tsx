import type { TreeWithPathProps } from './types';
import { useTreeData, useTreeSelection, useTreeExpansion } from './lib.ts';
import { Tree } from 'antd';

const fieldNames = {
  title: 'label',
  key: 'value',
  children: 'child',
};

export function TreeWithPath({ options, onChange, value }: TreeWithPathProps) {
  const processedTreeData = useTreeData(options);

  const { selectedKeys, parentKeys, handleSelect } = useTreeSelection(
    processedTreeData,
    value,
    onChange,
  );

  const { expandedKeys, handleExpand } = useTreeExpansion(parentKeys, value);

  return (
    <Tree
      expandedKeys={expandedKeys}
      fieldNames={fieldNames}
      onExpand={handleExpand}
      onSelect={handleSelect}
      selectedKeys={selectedKeys}
      treeData={processedTreeData}
    />
  );
}
