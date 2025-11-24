import { CreateContentBlockArgs, ContentBlock } from './types'

export const random = <T>(a: Array<T>): T => {
  const i = Math.floor(Math.random() * a.length)
  return a[i]
}

export const createContentBlock = ({
  isActive = true,
  isScript = false,
  onFinishOutput,
  elements
}: CreateContentBlockArgs): ContentBlock => {
  const _elements = elements ?? [{ type: 'input' }]

  return {
    id: Math.random(),
    isActive,
    isScript,
    onFinishOutput,
    elements: _elements.map((el) => ({
      id: Math.random(),
      ...el
    }))
  }
}

export const makeLastBlockInactive = (content: ContentBlock[]): ContentBlock[] => {
  const newContent = [...content]
  newContent[newContent.length - 1].isActive = false
  return newContent
}

export const pause = async (ms: number = 1000) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, ms)
  })
}

export const scrollToBottom = () => {
  const display = document.getElementById('display')
  display?.scrollTo(0, display?.scrollHeight)
}
