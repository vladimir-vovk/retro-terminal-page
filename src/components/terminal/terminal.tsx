'use client'
import { useEffect, useState, ReactElement } from 'react'
import styles from './terminal.module.css'
import { Input } from './input'
import { Output } from './output'
import { TerminalContent } from './types'
import { createTerminalContent, pause } from './utils'
import { empty, clear, help, install, contact, welcome, makeCoffee, whoami } from './commands'

const initialContent: TerminalContent[] = [
  createTerminalContent({
    type: 'output',
    isActive: true,
    isScript: true,
    text: ''
  })
  // createTerminalContent({})
]

const commands: Record<string, (...args: any[]) => void> = {
  '': empty,
  clear,
  help,
  install,
  contact,
  make_coffee: makeCoffee,
  whoami,
  reboot: welcome
}

export const Terminal = () => {
  const [content, setContent] = useState<TerminalContent[]>(initialContent)

  /* run welcome script */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      welcome({ setContent })
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  /* copy text in lower case */
  const onCopy = (event: any) => {
    const selection = document.getSelection()
    event.clipboardData.setData('text/plain', selection?.toString().toLowerCase())
    event.preventDefault()
  }

  useEffect(() => {
    addEventListener('copy', onCopy)
    return () => removeEventListener('copy', onCopy)
  }, [])

  const onFinishOutput = () => {
    /* check if command controlled by script */
    const current = content[content.length - 1]
    if (current.isScript) {
      current.callback?.()
      return
    }

    setContent((oldContent) => {
      const newContent = [...oldContent]
      newContent[newContent.length - 1].isActive = false
      newContent.push(createTerminalContent({}))

      return newContent
    })
  }

  const execute = async (command: string) => {
    /* emulate slow execution before run command */
    setContent((oldContent) => {
      const newContent = [...oldContent]
      newContent[newContent.length - 1].isActive = false
      newContent.push(
        createTerminalContent({
          type: 'output',
          isActive: true,
          isScript: true
        })
      )

      return newContent
    })

    if (command) {
      await pause()
    }
    setContent((oldContent) => {
      const newContent = [...oldContent.slice(0, -1)]
      return newContent
    })

    if (Object.keys(commands).includes(command)) {
      commands[command]?.({ setContent })
    } else {
      setContent((oldContent) => {
        const newContent = [...oldContent]

        const text = `Unknown command: ${command}`
        newContent.push(createTerminalContent({ type: 'output', text }))

        return newContent
      })
    }
  }

  const renderElement = ({ id, type, isActive, text, delay }: TerminalContent): ReactElement => {
    if (type === 'input') {
      return <Input key={id} {...{ execute, isActive, text }} />
    } else if (type === 'output') {
      return <Output key={id} {...{ text, delay, isActive, onFinish: onFinishOutput }} />
    }

    return <></>
  }

  return (
    <div className={styles.display} id="display">
      <div className={styles.scanline} />
      <div className={styles.content}>{content.map((el) => renderElement(el))}</div>
    </div>
  )
}
