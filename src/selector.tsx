import type { TreeWithPathProps } from './types';
import { useTreeData, useTreeSelection, useTreeExpansion } from './lib.ts';
import { Tree } from 'antd';
import type { TreeProps } from 'antd';

const fieldNames: TreeProps['fieldNames'] = {
  title: 'label',
  key: 'value',
  children: 'children',
};

export function TreeWithPath({
  options,
  onChange,
  value,
  ...rest
}: TreeWithPathProps) {
  const processedTreeData = useTreeData(options);

  const { selectedKeys, parentKeys, handleSelect } = useTreeSelection(
    processedTreeData,
    value,
    onChange,
  );

  const { expandedKeys, handleExpand } = useTreeExpansion(parentKeys, value);

  return (
    <Tree
      {...rest}
      expandedKeys={expandedKeys}
      fieldNames={fieldNames}
      onExpand={handleExpand}
      onSelect={handleSelect}
      selectedKeys={selectedKeys}
      treeData={processedTreeData}
    />
  );
}
