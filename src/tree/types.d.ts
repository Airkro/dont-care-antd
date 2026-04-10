import type { DataNode } from 'antd/es/tree'
import type { TreeProps, TreeSelectProps } from 'antd'

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

type SharedProps = {
  options?: TreeData
  onChange?: (value?: TreeValue, prevKeys?: string[]) => void
  value?: TreeValue
}

export type TreeWithPathProps = Omit<TreeProps, 'treeData'> & SharedProps

export type TreeBoxWithPathProps = Omit<TreeProps, 'treeData'> &
  SharedProps & {
    /** 是否显示清空按钮 */
    clearable?: boolean
  }

export type TreeSelectWithPathProps = Omit<TreeSelectProps, 'treeData'> &
  SharedProps
