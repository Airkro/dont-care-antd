import { Card, Segmented, type SegmentedProps } from 'antd';
import type { TreeData, TreeValue } from '../../src/tree/types.d.ts';
import { TreeBoxWithPath } from '../../src/tree/tree-box.tsx';
import { TreeSelectWithPath } from '../../src/tree/tree-select.tsx';
import { TreeWithPath } from '../../src/tree/tree.tsx';
import { useLocalStorageState } from 'ahooks';

type TreeType = 'select' | 'tree' | 'box';

const TREE_COMPONENTS: Record<
  TreeType,
  React.ComponentType<{
    onChange?: (value?: TreeValue) => void;
    options?: TreeData;
    value?: TreeValue;
    open?: boolean;
  }>
> = {
  select: TreeSelectWithPath,
  tree: TreeWithPath,
  box: TreeBoxWithPath,
};

interface TreeDisplayProps {
  onChange: (value?: TreeValue) => void;
  value?: TreeValue;
  options: TreeData | undefined;
}

const types: SegmentedProps['options'] = [
  { label: 'TreeSelect', value: 'select' },
  { label: 'Tree', value: 'tree' },
  { label: 'TreeBox', value: 'box' },
];

export function TreeDisplay({ onChange, value, options }: TreeDisplayProps) {
  const [treeType, setTreeType] = useLocalStorageState<TreeType>('treeType', {
    defaultValue: 'select',
  });
  const Ele = TREE_COMPONENTS[treeType];

  return (
    <Card title="树形结构">
      <Segmented
        options={types}
        value={treeType}
        onChange={(val) => setTreeType(val as TreeType)}
      />
      <br />
      <br />
      <Ele onChange={onChange} options={options} value={value} open />
    </Card>
  );
}
