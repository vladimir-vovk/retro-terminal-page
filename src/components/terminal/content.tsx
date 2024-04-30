import { Dispatch, SetStateAction } from 'react'
import { ContentBlock } from './content-block'
import { ContentBlock as ContentBlockType } from './types'
import styles from './content.module.css'
import { createContentBlock } from './utils'

type Props = {
  content: ContentBlockType[]
  setContent: Dispatch<SetStateAction<ContentBlockType[]>>
  execute: (command: string) => void
}

export const Content = ({ content, setContent, execute }: Props) => {
  const onFinishOutput = () => {
    /* check if command controlled by script */
    const block = content[content.length - 1]
    if (block.isScript) {
      block.onFinishOutput?.()
      return
    }

    const element = block.elements[block.elements.length - 1]
    if (element.type === 'input') {
      return
    }

    setContent((oldContent) => {
      const newContent = [...oldContent]
      newContent[newContent.length - 1].isActive = false
      newContent.push(createContentBlock({}))

      return newContent
    })
  }

  return (
    <div className={styles.content}>
      {content.map(({ id, isActive, isScript, elements }) => (
        <ContentBlock key={id} {...{ isActive, isScript, elements, onFinishOutput, execute }} />
      ))}
    </div>
  )
}
