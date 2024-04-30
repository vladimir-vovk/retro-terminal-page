import { createContentBlock, pause } from '../utils'
import { CommandArgs } from '../types'
import { welcome } from './welcome'

export const reboot = async ({ setContent }: CommandArgs): Promise<void> => {
  let isWaiting = true
  const text = `Bye! ~(=^‥^)ノ
`

  setContent((oldContent: any) => {
    return [
      ...oldContent,
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

  await pause(2000)

  await welcome({ setContent })
}
