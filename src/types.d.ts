import type { DataNode } from 'antd/es/tree'
import type { TreeProps } from 'antd'

interface BaseNode {
  label?: string
  value: string
  ident?: string
  children?: TreeNode[]
}

export interface TreeNode
  extends Partial<Omit<DataNode, 'children'>>, BaseNode {}

export interface ProcessedTreeNode
  extends Omit<DataNode, 'children'>, BaseNode {
  key: string
  children?: ProcessedTreeNode[]
  $path: { value: string; ident: string }[]
}

export type TreeData = TreeNode[]

export type ProcessedTreeData = ProcessedTreeNode[]

export type TreeValue = { [ident: string]: string }

export interface TreeWithPathProps extends TreeProps {
  options?: TreeData
  onChange?: (value?: TreeValue, prevKeys?: string[]) => void
  value?: TreeValue
}
