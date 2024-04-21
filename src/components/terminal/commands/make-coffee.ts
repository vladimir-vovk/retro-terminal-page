import { createTerminalContent, makeInactive, pause } from '../utils'
import { CommandArgs } from '../types'

export const makeCoffee = async ({ setContent }: CommandArgs): Promise<void> => {
  let isWaiting = true

  setContent((oldContent: any) => {
    return [
      ...makeInactive(oldContent),
      createTerminalContent({
        type: 'output',
        isScript: true,
        text: 'Making cofee. Please stand by...'
      })
    ]
  })

  await pause(3000)

  setContent((oldContent: any) => {
    return [
      ...makeInactive(oldContent),
      createTerminalContent({
        type: 'output',
        isScript: true,
        text: '\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',
        delay: 300,
        callback: () => (isWaiting = false)
      })
    ]
  })

  while (isWaiting) {
    await pause()
  }

  const text = `

─▄▀─▄▀
──▀──▀
█▀▀▀▀▀█▄
█░░░░░█─█
▀▄▄▄▄▄▀▀

Enjoy! :)

`
  setContent((oldContent: any) => {
    return [
      ...makeInactive(oldContent),
      createTerminalContent({
        type: 'output',
        text
      })
    ]
  })
}
