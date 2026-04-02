import { Card, Typography, Space } from 'antd';
import { TreeTypeSelector } from './tree-type-selector.tsx';
import type { TreeControlPanelProps } from '../types.d.ts';

const { Text } = Typography;

export function TreeControlPanel({ onChange, value }: TreeControlPanelProps) {
  return (
    <Card>
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Text strong={true}>选择示例数据：</Text>
        <TreeTypeSelector onChange={onChange} value={value} />
      </Space>
    </Card>
  );
}
