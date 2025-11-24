import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const empty = ({ setContent }: CommandArgs): void => {
  setContent((oldContent: any) => {
    return [...oldContent, createContentBlock({})]
  })
}
