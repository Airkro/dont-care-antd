import type { TreeSelectProps } from 'antd';
import { TreeSelect } from 'antd';
import type { TreeSelectWithPathProps } from './types';
import { useTreeData, useTreeSelection, useTreeExpansion } from './lib.ts';

const fieldNames: TreeSelectProps['fieldNames'] = {
  label: 'label',
  value: 'value',
  children: 'children',
};

const style = {
  width: '100%',
};

export function TreeSelectWithPath({
  options,
  onChange,
  value,
  ...rest
}: TreeSelectWithPathProps) {
  const processedTreeData = useTreeData(options);

  const { selectedKeys, parentKeys, handleSelect } = useTreeSelection(
    processedTreeData,
    value,
    onChange,
  );

  const { expandedKeys, handleExpand } = useTreeExpansion(
    processedTreeData,
    parentKeys,
    value,
  );

  return (
    <TreeSelect
      style={style}
      {...rest}
      fieldNames={fieldNames}
      onChange={(_value, _label, extra) => {
        handleSelect([extra.triggerValue], { selected: true });
      }}
      onTreeExpand={handleExpand}
      treeData={processedTreeData}
      treeExpandedKeys={expandedKeys as string[] | undefined}
      value={selectedKeys[0]}
    />
  );
}
