import { Dispatch, SetStateAction, useRef, useEffect } from 'react'
import { ContentBlock } from './types'
import { createContentBlock } from './utils'

import styles from './menu.module.css'

type Props = {
  content: ContentBlock[]
  setContent: Dispatch<SetStateAction<ContentBlock[]>>
  execute: (command: string) => void
}

export const Menu = ({ content, setContent, execute }: Props) => {
  const sound = useRef<any>()

  useEffect(() => {
    sound.current = new Audio('sounds/key-5.wav')
  }, [])

  const playSound = () => {
    if (sound.current) {
      sound.current.load()
      sound.current.play()
    }
  }

  const onPress = (command: string) => {
    playSound()

    setContent((oldContent) => {
      const newContent = [...oldContent.slice(0, -1)]
      newContent.push(
        createContentBlock({
          isActive: false,
          isScript: true,
          elements: [{ type: 'input', text: command }]
        })
      )

      return newContent
    })

    execute(command)
  }

  const onMenu = () => {
    const block = content[content.length - 1]
    const length = block.elements.length
    const element = block.elements[length - 1]

    if (!block.isActive || element.type !== 'input') {
      return
    }

    playSound()

    setContent((oldContent) => {
      const newContent = [...oldContent.slice(0, -1)]
      newContent.push(
        createContentBlock({
          isActive: true,
          isScript: true,
          elements: [
            {
              type: 'input',
              text: 'menu'
            },
            {
              type: 'button',
              text: '[ whoami ]',
              onPress: () => onPress('whoami')
            },
            {
              type: 'button',
              text: '[ contact ]',
              onPress: () => onPress('contact')
            },
            {
              type: 'button',
              text: '[ install ]',
              onPress: () => onPress('install')
            },
            {
              type: 'button',
              text: '[ make_coffee ]',
              onPress: () => onPress('make_coffee')
            },
            {
              type: 'button',
              text: '[ clear ]',
              onPress: () => onPress('clear')
            },
            {
              type: 'button',
              text: '[ reboot ]',
              onPress: () => onPress('reboot')
            },
            {
              type: 'text',
              text: ''
            }
          ]
        })
      )

      return newContent
    })
  }

  return (
    <div className={styles.menu} onClick={onMenu}>
      <div>[...]</div>
    </div>
  )
}
