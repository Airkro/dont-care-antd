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
  element: Ele = Item,
  separate,
  rules,
  children,
  ...props
}: {
  separate: Separate;
  element?: React.ElementType;
} & ComponentProps<typeof Item>) {
  const form = useFormInstance();

  return (
    <Ele
      {...props}
      getValueFromEvent={getValueFromEvent(form, separate)}
      getValueProps={getValueProps(form, separate)}
      rules={transformRules(form, separate, rules)}
    >
      {children}
    </Ele>
  );
}
