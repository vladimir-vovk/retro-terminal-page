import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const clear = ({ setContent }: CommandArgs): void => {
  setContent(() => {
    return [createContentBlock({})]
  })
}
