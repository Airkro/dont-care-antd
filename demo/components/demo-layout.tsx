import { Typography, Row, Col } from 'antd';
import { BranchesOutlined } from '@ant-design/icons';
import { TreeControlPanel } from './tree-control-panel.tsx';
import { ExampleSelector } from './example-selector.tsx';
import { TreeDisplay } from './tree-display.tsx';
import { DataOutputPanel } from './data-output-panel.tsx';
import type { TreeData, TreeValue } from '../../src/types';
import type { ExampleKey } from '../types.ts';

const { Title, Paragraph } = Typography;

const containerStyle: React.CSSProperties = {
  margin: '0 auto',
  padding: '20px',
};

interface DemoLayoutProps {
  value: TreeValue;
  onChange: (value: TreeValue) => void;
  options: TreeData | undefined;
  exampleKey: ExampleKey;
  setExampleKey: (key: ExampleKey) => void;
}

export function DemoLayout({
  value,
  onChange,
  options,
  exampleKey,
  setExampleKey,
}: DemoLayoutProps) {
  return (
    <div style={containerStyle}>
      <Title level={2}>
        <BranchesOutlined /> TreeWithPath 组件演示
      </Title>

      <Paragraph>
        一个支持获取完整节点路径或值的路径的 React 树形选择组件。
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col span={4}>
          <TreeControlPanel onChange={setExampleKey} value={exampleKey} />
        </Col>
        <Col span={5}>
          <DataOutputPanel value={options} />
        </Col>
        <Col span={5}>
          <ExampleSelector
            exampleKey={exampleKey}
            onChange={onChange}
            value={value}
          />
        </Col>

        <Col span={5}>
          <TreeDisplay onChange={onChange} options={options} value={value} />
        </Col>

        <Col span={5}>
          <DataOutputPanel value={value} />
        </Col>
      </Row>
    </div>
  );
}
