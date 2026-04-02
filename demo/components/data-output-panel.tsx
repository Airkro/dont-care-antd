import { Card, Space, Typography } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import type { DataOutputPanelProps, CodeBlockProps } from '../types.d.ts';

export function CodeBlock({ value }: CodeBlockProps) {
  return (
    <Typography.Paragraph>
      <pre style={{ margin: 0, fontSize: 14 }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </Typography.Paragraph>
  );
}

export function DataOutputPanel({ value }: DataOutputPanelProps) {
  return (
    <Card
      title={
        <Space>
          <CodeOutlined />
          数据输出
        </Space>
      }
    >
      <CodeBlock value={value} />
    </Card>
  );
}
