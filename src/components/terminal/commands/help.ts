import { createTerminalContent } from '../utils'
import { CommandArgs } from '../types'

export const help = ({ setContent }: CommandArgs): void => {
  const text = `Available commands:
help, clear, whoami, install, make_coffee, reboot

`

  setContent((oldContent: any) => {
    return [
      ...oldContent,
      createTerminalContent({
        type: 'output',
        text
      })
    ]
  })
}
