export type TerminalContentType = 'output' | 'input'

export type TerminalContent = {
  id: number
  type: TerminalContentType
  isActive: boolean
  text?: string
  isScript?: boolean
  delay?: number
  callback?: () => void
}

export type TerminalContentArgs = {
  type?: TerminalContentType
  isActive?: boolean
  text?: string
  isScript?: boolean
  delay?: number
  callback?: () => void
}

export type CommandArgs = {
  setContent: (...args: any[]) => any
}
