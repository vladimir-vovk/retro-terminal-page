import { createTerminalContent } from '../utils'
import { CommandArgs } from '../types'

export const contact = ({ setContent }: CommandArgs): void => {
  const text = `
Social links

GitHub    https://github.com/vladimir-vovk
LinkedIn  https://linkedin.com/in/vvovk
Twitter   https://twitter.com/vladimir_vovk
Telegram  https://t.me/vovk_vladimir

Blog      https://dev.to/vladimirvovk

Experiments

Expo Template   https://github.com/vladimir-vovk/expo-ts
Cats Word Game  https://cats-word-game.vovk.in/
Fox-pet Game    https://vpet.vovk.in/

Find more on the GitHub... ~(=^‥^)

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
