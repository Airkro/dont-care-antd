import { Form } from 'antd';
import {
  getValueFromEvent,
  getValueProps,
  transformRules,
  type Separate,
} from './utils.ts';
import type { ComponentProps } from 'react';

const { Item, useFormInstance } = Form;

export function FormItemSeparate({
  separate,
  rules,
  children,
  ...props
}: { separate: Separate } & ComponentProps<typeof Item>) {
  const form = useFormInstance();

  return (
    <Item
      {...props}
      getValueFromEvent={getValueFromEvent(form, separate)}
      getValueProps={getValueProps(form, separate)}
      rules={transformRules(form, separate, rules)}
    >
      {children}
    </Item>
  );
}
