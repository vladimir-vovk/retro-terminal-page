import { createTerminalContent, makeInactive } from '../utils'
import { CommandArgs } from '../types'
import { pause } from '../utils'

export const welcome = async ({ setContent }: CommandArgs): Promise<void> => {
  let isWaiting = true

  let text = `░█░█░█▀▀░█░░░█░░░█▀█░█
░█▀█░█▀▀░█░░░█░░░█░█░▀
░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀

Welcome to my personal web-page!

`
  setContent((_: any) => {
    return [
      createTerminalContent({
        type: 'output',
        text,
        isScript: true,
        callback: () => (isWaiting = false)
      })
    ]
  })

  while (isWaiting) {
    await pause()
  }

  isWaiting = true
  text = `Initializing ...
  - Loading memes... Done
  - Loading cats... Done
  - Loading coffee... Done

Enjoy your stay!

=^_^=

Please type "help" to get available commands.

`
  setContent((oldContent: any) => {
    return [
      ...makeInactive(oldContent),
      createTerminalContent({
        type: 'output',
        text,
        isScript: true,
        callback: () => (isWaiting = false)
      })
    ]
  })

  while (isWaiting) {
    await pause()
  }

  setContent((oldContent: any) => {
    return [
      ...makeInactive(oldContent),
      createTerminalContent({
        type: 'input',
        text,
        isScript: true,
        callback: () => (isWaiting = false)
      })
    ]
  })
}
