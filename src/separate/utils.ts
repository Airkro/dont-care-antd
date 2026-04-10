import type { FormInstance } from 'antd';
import type { FormItemProps, Rule } from 'antd/es/form';

export type Separate = Record<string, string> | string[];

const toNamePath = (path: string): string[] => path.split('.');

type Entry = { key: string; namePath: string[] };

const getEntries = (separate: Separate): Entry[] => {
  if (Array.isArray(separate)) {
    return separate.map((path, index) => ({
      key: String(index),
      namePath: toNamePath(path),
    }));
  }

  return Object.entries(separate).map(([key, path]) => ({
    key,
    namePath: toNamePath(path),
  }));
};

const isUndefined = (v: unknown): v is undefined => v === undefined;

const getFieldValue = (form: FormInstance, entries: Entry[]) =>
  entries.map(({ namePath }) => form.getFieldValue(namePath));

const isAllUndefined = (values: unknown[]): boolean =>
  values.every(isUndefined);

export const transformRules = (
  form: FormInstance,
  separate: Separate,
  rules: Rule[] = [],
): Rule[] => {
  const entries = getEntries(separate);
  const isArray = Array.isArray(separate);

  const mapped = rules.map((rule) => {
    if (typeof rule === 'object' && rule) {
      return {
        ...rule,
        transform: () => {
          const values = getFieldValue(form, entries);

          if (isAllUndefined(values)) {
            return undefined;
          }

          if (isArray) {
            return values;
          }

          return Object.fromEntries(
            entries.map(({ key }, i) => [key, values[i]]),
          );
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
  const entries = getEntries(separate);
  const isArray = Array.isArray(separate);

  return () => {
    const values = getFieldValue(form, entries);

    if (isAllUndefined(values)) {
      return {};
    }

    if (isArray) {
      return { value: values };
    }

    return {
      value: Object.fromEntries(entries.map(({ key }, i) => [key, values[i]])),
    };
  };
};

export const getValueFromEvent = (
  form: FormInstance,
  separate: Separate,
): ((values: Record<string, unknown>) => unknown) => {
  const entries = getEntries(separate);

  return (values: Record<string, unknown>) => {
    const fieldData = entries.map(({ key, namePath }) => ({
      name: namePath,
      value: values?.[key],
    }));

    form.setFields(fieldData);

    return values;
  };
};
