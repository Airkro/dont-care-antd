import type { DataNode } from 'antd/es/tree'
import type { TreeProps } from 'antd'

interface BaseNode {
  label?: string
  value: string
  ident?: string
  child?: TreeNode[]
}

export interface TreeNode
  extends Partial<Omit<DataNode, 'children'>>, BaseNode {}

export interface ProcessedTreeNode
  extends Omit<DataNode, 'children'>, BaseNode {
  key: string
  child?: ProcessedTreeNode[]
  $path: { value: string; ident: string }[]
}

export type TreeData = TreeNode[]

export type ProcessedTreeData = ProcessedTreeNode[]

export type TreeValue = { [ident: string]: string }

export interface TreeWithPathProps extends TreeProps {
  options?: TreeData
  onChange?: (value: TreeValue) => void
  value?: TreeValue
}
