import { createContentBlock, pause } from '../utils'
import { CommandArgs } from '../types'

export const blog = async ({ setContent, router }: CommandArgs): Promise<void> => {
  let isWaiting = true
  const text = `Loading blog...`

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

  await pause(1000)

  router.push('/blog')
}
