import { createContentBlock, makeLastBlockInactive } from '../utils'
import { CommandArgs } from '../types'
import { pause } from '../utils'

export const welcome = async ({ setContent }: CommandArgs): Promise<void> => {
  let isWaiting = true

  let text = `░█░█░█▀▀░█░░░█░░░█▀█░█
░█▀█░█▀▀░█░░░█░░░█░█░▀
░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀

Welcome to my personal web page!

`
  setContent((_: any) => {
    return [
      createContentBlock({
        isScript: true,
        onFinishOutput: () => (isWaiting = false),
        elements: [
          {
            type: 'text',
            text
          }
        ]
      })
    ]
  })

  while (isWaiting) {
    await pause()
  }

  isWaiting = true
  text = `Initializing .....

  - Loading memes...  [done]
  - Loading cats...   [done]
  - Loading coffee... [done]

Enjoy your stay!

=^_^=

Please type "help" or press the menu button (at the bottom right) to get available commands.

`
  setContent((oldContent: any) => {
    return [
      ...makeLastBlockInactive(oldContent),
      createContentBlock({
        isScript: true,
        onFinishOutput: () => (isWaiting = false),
        elements: [
          {
            type: 'text',
            text
          }
        ]
      })
    ]
  })

  while (isWaiting) {
    await pause()
  }

  setContent((oldContent: any) => {
    return [
      ...makeLastBlockInactive(oldContent),
      createContentBlock({
        isScript: true,
        onFinishOutput: () => (isWaiting = false),
        elements: [
          {
            type: 'input'
          }
        ]
      })
    ]
  })
}
