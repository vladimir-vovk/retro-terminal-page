import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const date = ({ setContent }: CommandArgs): void => {
  setContent((oldContent: any) => [
    ...oldContent,
    createContentBlock({
      elements: [
        { type: 'text', text: new Date().toLocaleString() },
        { type: 'text', text: '\n\n' }
      ]
    })
  ])
}
