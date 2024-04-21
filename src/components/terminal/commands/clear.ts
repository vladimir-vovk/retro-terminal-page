import { createTerminalContent } from '../utils'
import { CommandArgs } from '../types'

export const clear = ({ setContent }: CommandArgs): void => {
  setContent(() => {
    return [createTerminalContent({})]
  })
}
