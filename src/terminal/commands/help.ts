import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const help = ({ setContent }: CommandArgs): void => {
  const text = `Available commands:
help, whoami, blog, contact, install, make_coffee, clear, date, reboot

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
