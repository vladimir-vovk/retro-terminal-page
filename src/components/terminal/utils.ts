import { TerminalContentArgs, TerminalContent } from './types'

export const createTerminalContent = ({
  type = 'input',
  isActive = true,
  text = '',
  isScript = false,
  delay,
  callback
}: TerminalContentArgs): TerminalContent => ({
  id: Math.random(),
  type,
  isActive,
  text,
  isScript,
  delay,
  callback
})

export const makeInactive = (content: TerminalContent[]): TerminalContent[] => {
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
