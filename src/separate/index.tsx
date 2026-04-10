import type { Rule } from 'antd/es/form';
import { Form } from 'antd';
import { getValueFromEvent, getValueProps, transformRules } from './utils.ts';

export type Separate = (string | string[])[];

const { Item, useFormInstance } = Form;

export function FormItemSeparate({
  separate,
  rules,
  children,
  ...props
}: {
  separate: Separate;
  rules: Rule[];
  children?: React.ReactNode;
}) {
  const form = useFormInstance();

  return (
    <>
      <Item
        {...props}
        getValueFromEvent={getValueFromEvent(form, separate)}
        getValueProps={getValueProps(form, separate)}
        name="$.fake"
        rules={transformRules(form, separate, rules)}
      >
        {children}
      </Item>
      {separate.map((name) => (
        <Item key={String(name)} hidden={true} name={name} noStyle={true} />
      ))}
    </>
  );
}
