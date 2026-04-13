import type { TreeData, TreeValue, TreeNode } from '../src/types.d.ts'

export type { TreeData, TreeNode, TreeValue }

/**
 * 示例数据的键类型
 */
export type ExampleKey =
  | 'organization'
  | 'fileSystem'
  | 'productCategories'
  | 'locations'
  | 'courses'

/**
 * 示例数据配置类型
 */
export interface ExampleConfig {
  label: string
  options: TreeData
  examples: TreeValue[]
}

/**
 * 树控制面板属性
 */
export interface TreeControlPanelProps {
  onChange: (treeTypeKey: ExampleKey) => void
  value: ExampleKey
}

/**
 * 树类型选择器属性
 */
export interface TreeTypeSelectorProps {
  onChange: (treeTypeKey: ExampleKey) => void
  value: ExampleKey
}

/**
 * 数据输出面板属性
 */
export interface DataOutputPanelProps {
  value: any
}

/**
 * 代码块组件属性
 */
export interface CodeBlockProps {
  value: unknown
}
