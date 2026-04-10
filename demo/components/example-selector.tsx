import { Card, Radio } from 'antd';
import { CodeBlock } from './data-output-panel.tsx';
import { useExampleHandler } from '../hooks/use-example-handler.ts';
import { examples } from '../fixtures.ts';
import type { TreeValue } from '../../src/tree/types';
import type { ExampleKey } from '../types.d.ts';

interface ExampleSelectorProps {
  onChange: (value?: TreeValue) => void;
  value?: TreeValue;
  exampleKey: ExampleKey;
}

export function ExampleSelector({
  onChange,
  value,
  exampleKey,
}: ExampleSelectorProps) {
  const handleExampleChange = useExampleHandler(onChange);

  return (
    <Card title="可选预设值">
      <Radio.Group
        onChange={(e) => handleExampleChange(e.target.value)}
        options={examples[exampleKey]?.map((item: TreeValue) => ({
          value: JSON.stringify(item),
          label: <CodeBlock value={item} />,
        }))}
        value={value ? JSON.stringify(value) : undefined}
      />
    </Card>
  );
}
