import { useState } from 'react';
import { Form, Card, Typography, DatePicker, Input, Space, Button } from 'antd';
import { FormItemSeparate } from '../../src/separate/index.tsx';
import { AddressInput } from './components/address-input.tsx';

const { Text } = Typography;
const { RangePicker } = DatePicker;

function trimValue(value: string) {
  return value.trim();
}

export function Page() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Record<string, unknown>>({});

  const onFinish = (values: unknown) => {
    console.log('Form values:', values);
    setFormValues(values as Record<string, unknown>);
  };

  const handleValuesChange = (
    _: unknown,
    allValues: Record<string, unknown>,
  ) => {
    setFormValues(allValues);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>FormItemSeparate 示例</h2>

      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        onValuesChange={handleValuesChange}
      >
        <div style={{ display: 'flex', gap: 16 }}>
          {/* 示例1: 数组类型拆分 */}
          <Card title="示例1: 数组类型拆分" style={{ flex: 1 }}>
            <FormItemSeparate
              label="日期范围"
              name="dateRange"
              separate={['startDate', 'endDate']}
            >
              <RangePicker allowClear />
            </FormItemSeparate>

            <Space>
              <Form.Item name="startDate" noStyle>
                <DatePicker placeholder="开始日期" allowClear />
              </Form.Item>
              <Form.Item name="endDate" noStyle>
                <DatePicker placeholder="结束日期" allowClear />
              </Form.Item>
            </Space>
          </Card>

          {/* 示例2: 对象类型拆分 */}
          <Card title="示例2: 对象类型拆分" style={{ flex: 1 }}>
            <FormItemSeparate
              label="地址信息"
              name="address"
              separate={{ city: 'io.city', street: 'io.street' }}
            >
              <AddressInput />
            </FormItemSeparate>

            <Space>
              <Form.Item name={['io', 'city']} noStyle normalize={trimValue}>
                <Input placeholder="城市" allowClear />
              </Form.Item>
              <Form.Item name={['io', 'street']} noStyle>
                <Input placeholder="街道" allowClear />
              </Form.Item>
            </Space>
          </Card>

          <Card title="表单值" style={{ flex: 1 }}>
            <Text>
              <pre style={{ margin: 0 }}>
                {JSON.stringify(formValues, null, 2)}
              </pre>
            </Text>
          </Card>
        </div>

        <Form.Item style={{ marginTop: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
