import { Card } from 'antd';
import type { TreeData, TreeValue } from '../../src/types.d.ts';
import { TreeBox } from '../../src/tree-box.tsx';

interface TreeDisplayProps {
  onChange: (value?: TreeValue) => void;
  value?: TreeValue;
  options: TreeData | undefined;
}

export function TreeDisplay({ onChange, value, options }: TreeDisplayProps) {
  return (
    <Card title="树形结构">
      <TreeBox onChange={onChange} options={options} value={value} />
    </Card>
  );
}
