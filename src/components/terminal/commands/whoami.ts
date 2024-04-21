import { createTerminalContent, makeInactive } from '../utils'
import { CommandArgs } from '../types'

export const whoami = ({ setContent }: CommandArgs): void => {
  const text = `
──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█

My name is Vladimir Vovk. I am passionate about web and mobile technologies, React Native, React, building beautiful user experiences, and making the world a better place.

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
