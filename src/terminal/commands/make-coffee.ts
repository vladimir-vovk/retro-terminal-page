import { createContentBlock, makeLastBlockInactive, pause } from '../utils'
import { CommandArgs } from '../types'

export const makeCoffee = async ({ setContent }: CommandArgs): Promise<void> => {
  let isWaiting = true

  setContent((oldContent: any) => {
    return [
      ...makeLastBlockInactive(oldContent),
      createContentBlock({
        isScript: true,
        elements: [
          {
            type: 'text',
            text: 'Making cofee. Please stand by...'
          }
        ]
      })
    ]
  })

  await pause(3000)

  setContent((oldContent: any) => {
    return [
      ...makeLastBlockInactive(oldContent),
      createContentBlock({
        isScript: true,
        onFinishOutput: () => (isWaiting = false),
        elements: [
          {
            type: 'text',
            text: '\n\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',
            delay: 300
          }
        ]
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
      ...makeLastBlockInactive(oldContent),
      createContentBlock({
        elements: [
          {
            type: 'text',
            text
          }
        ]
      })
    ]
  })
}
