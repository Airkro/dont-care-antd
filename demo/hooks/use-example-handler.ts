import type { TreeValue } from '../../src/types.d.ts';

/**
 * 处理示例数据选择的 hook
 * @param onChange 树值变化回调函数
 * @returns 处理示例变化的函数
 */
export function useExampleHandler(onChange: (value?: TreeValue) => void) {
  const handleExampleChange = (exampleValue: string) => {
    try {
      onChange(JSON.parse(exampleValue));
    } catch (error) {
      console.error('Failed to parse example value:', error);
    }
  };

  return handleExampleChange;
}
