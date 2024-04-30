import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const install = ({ setContent }: CommandArgs): void => {
  setContent((oldContent: any) => {
    return [
      ...oldContent,
      createContentBlock({
        elements: [
          {
            type: 'text',
            text: `Did you know I am NPM installable? ฅ^•ﻌ•^ฅ Simply run "npx @vladimir-vovk/about-me" in your terminal, and find the links to my expriments and socials.

`
          }
        ]
      })
    ]
  })
}
