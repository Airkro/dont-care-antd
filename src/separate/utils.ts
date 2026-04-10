import type { FormInstance } from 'antd';
import type { FormItemProps, Rule } from 'antd/es/form';

export type Separate = (string | string[])[];

export const transformRules = (
  form: FormInstance,
  separate: Separate,
  rules: Rule[] = [],
): Rule[] => {
  const mapped = rules.map((rule) => {
    if (typeof rule === 'object' && rule) {
      return {
        ...rule,
        transform: () => {
          const val = separate.map((name) => form.getFieldValue(name));

          return val.every((item) => item === undefined) ? undefined : val;
        },
      };
    }

    return rule;
  });

  return mapped;
};

type GetValueProps = (
  form: FormInstance,
  separate: Separate,
) => FormItemProps['getValueProps'];

export const getValueProps: GetValueProps = (form, separate) => {
  return () => {
    const value = separate.map((name) => form.getFieldValue(name));

    if (value.every((v) => v === undefined)) {
      return {};
    }

    return { value };
  };
};

export const getValueFromEvent = (
  form: FormInstance,
  separate: Separate,
): ((values: Record<keyof Separate, unknown>) => unknown) => {
  return (values: Record<keyof Separate, unknown>) => {
    const fieldData = separate.map((name, index) => ({
      name,
      value: values?.[index],
    }));

    form.setFields(fieldData);

    return values;
  };
};
