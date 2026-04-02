import { Card } from 'antd';
import { TreeWithPath } from '../../src/selector.tsx';
import type { TreeData, TreeValue } from '../../src/types.d.ts';

interface TreeDisplayProps {
  onChange: (value?: TreeValue) => void;
  value?: TreeValue;
  options: TreeData | undefined;
}

export function TreeDisplay({ onChange, value, options }: TreeDisplayProps) {
  return (
    <Card title="树形结构">
      <TreeWithPath onChange={onChange} options={options} value={value} />
    </Card>
  );
}
