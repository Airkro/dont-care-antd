import { useState, useEffect } from 'react';
import { useLocalStorageState } from 'ahooks';
import { treeConfigs } from '../fixtures.ts';
import type { ExampleKey } from '../types.ts';
import type { TreeData, TreeValue } from '../../src/tree/types.d.ts';

export function useTreeSelection() {
  const [exampleKey, setExampleKey] = useLocalStorageState<ExampleKey>(
    'tree-example-key',
    {
      defaultValue: 'organization',
    },
  );
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
