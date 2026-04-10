import { useState, useEffect } from 'react';
import { treeConfigs } from '../fixtures.ts';
import type { ExampleKey } from '../types.ts';
import type { TreeData, TreeValue } from '../../src/types.d.ts';

export function useTreeSelection() {
  const [exampleKey, setExampleKey] = useState<ExampleKey>('organization');
  const [value, setValue] = useState<TreeValue | undefined>({});
  const [options, setTreeData] = useState<TreeData>();

  useEffect(() => {
    const config = treeConfigs[exampleKey];

    if (!config) {
      return;
    }

    setTreeData(config.options);
    setValue(undefined);
  }, [exampleKey]);

  const onChange = (newValue?: TreeValue) => {
    setValue(newValue);
  };

  return {
    onChange,
    value,
    options,
    exampleKey,
    setExampleKey,
  };
}
