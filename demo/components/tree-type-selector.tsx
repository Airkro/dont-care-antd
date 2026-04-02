import { Radio, Space } from 'antd';
import { treeTypeOptions } from '../fixtures.ts';
import type { ExampleKey } from '../types.d.ts';

interface TreeTypeSelectorProps {
  onChange: (treeTypeKey: ExampleKey) => void;
  value: ExampleKey;
}

export function TreeTypeSelector({ onChange, value }: TreeTypeSelectorProps) {
  return (
    <Radio.Group
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
    >
      <Space orientation="vertical">
        {treeTypeOptions.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
