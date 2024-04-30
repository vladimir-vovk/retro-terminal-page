import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const help = ({ setContent }: CommandArgs): void => {
  const text = `Available commands:
help, clear, whoami, contact, install, make_coffee, reboot

`

  setContent((oldContent: any) => {
    return [
      ...oldContent,
      createContentBlock({
        elements: [{ type: 'text', text }]
      })
    ]
  })
}
