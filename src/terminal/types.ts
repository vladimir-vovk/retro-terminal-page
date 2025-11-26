import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Dispatch, SetStateAction } from 'react'
export type ElementType = 'text' | 'input' | 'button' | 'link'

export type Text = {
  type: 'text'
  id: number
  text?: string
  delay?: number
}

export type Input = {
  type: 'input'
  id: number
  text?: string
}

export type Button = {
  type: 'button'
  id: number
  text: string
  onPress: () => void
}

export type Link = {
  type: 'link'
  id: number
  href: string
  text: string
}

export type OutputElement = Text | Input | Button | Link

export type ContentBlock = {
  id: number
  isActive: boolean
  isScript?: boolean
  onFinishOutput?: () => void
  elements: OutputElement[]
}

export type CreateContentBlockArgs = {
  isActive?: boolean
  isScript?: boolean
  onFinishOutput?: () => void
  elements?: (Omit<Text, 'id'> | Omit<Input, 'id'> | Omit<Button, 'id'> | Omit<Link, 'id'>)[]
}

export type CommandArgs = {
  setContent: Dispatch<SetStateAction<ContentBlock[]>>
  router: AppRouterInstance
}
