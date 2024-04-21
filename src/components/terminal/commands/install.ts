import { createTerminalContent } from '../utils'
import { CommandArgs } from '../types'

export const install = ({ setContent }: CommandArgs): void => {
  setContent((oldContent: any) => {
    return [
      ...oldContent,
      createTerminalContent({
        type: 'output',
        text: `Did you know I am NPM installable? ฅ^•ﻌ•^ฅ Simply run "npx @vladimir-vovk/about-me" in your terminal, and find the links to my expriments and socials.

`
      })
    ]
  })
}
