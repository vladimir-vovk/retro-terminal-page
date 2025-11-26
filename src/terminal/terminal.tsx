'use client'
import clsx from 'clsx'
import { VT323 } from 'next/font/google'
import { useEffect, useState } from 'react'
import styles from './terminal.module.css'
import { ContentBlock } from './types'
import { createContentBlock, makeLastBlockInactive, pause } from './utils'
import { Content } from './content'
import { Menu } from './menu'
import {
  welcome,
  empty,
  clear,
  help,
  install,
  contact,
  makeCoffee,
  whoami,
  reboot,
  date,
  blog
} from './commands'
import { useRouter } from 'next/navigation'

const font = VT323({ weight: '400', subsets: ['latin'] })

const commands: Record<string, (...args: any[]) => void> = {
  '': empty,
  clear,
  help,
  install,
  contact,
  make_coffee: makeCoffee,
  whoami,
  reboot,
  date,
  blog
}

const initialContent: ContentBlock[] = [
  createContentBlock({
    isActive: true,
    isScript: true,
    elements: [
      {
        type: 'text'
      }
    ]
  })
]

export const Terminal = () => {
  const router = useRouter()
  const [content, setContent] = useState<ContentBlock[]>(initialContent)

  /* run welcome script */
  useEffect(() => {
    /* Fix body background color when come back from the blog */
    document.body.classList.add('terminalBody')

    const timeoutId = setTimeout(() => {
      welcome({ setContent, router })
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

  const execute = async (command: string) => {
    /* emulate slow execution before run command */
    setContent((oldContent) => {
      const newContent = makeLastBlockInactive(oldContent)
      newContent.push(
        createContentBlock({
          isActive: true,
          isScript: true,
          elements: [
            {
              type: 'text'
            }
          ]
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
      commands[command]?.({ setContent, router })
    } else {
      setContent((oldContent) => {
        const newContent = [...oldContent]

        const text = `Unknown command: ${command}\n\n`
        newContent.push(createContentBlock({ elements: [{ type: 'text', text }] }))

        return newContent
      })
    }
  }

  return (
    <div className={clsx(styles.display, font.className)} id="display">
      <div className={styles.scanline} />
      <Content {...{ content, setContent, execute }} />
      <Menu {...{ content, setContent, execute }} />
    </div>
  )
}
