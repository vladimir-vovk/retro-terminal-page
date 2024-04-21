import { useEffect, KeyboardEvent, useState, useCallback } from 'react'
import { scrollToBottom } from './utils'
import styles from './input.module.css'

type Props = {
  isActive: boolean
  execute: (command: string) => void
}

export const Input = ({ isActive, execute }: Props) => {
  const [input, setInput] = useState<string[]>([])

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key, metaKey, ctrlKey, altKey } = event
      const code = key.charCodeAt(0)

      if (code < 32 || code > 126) {
        return
      }

      const ignoreKeys = [
        'Tab',
        'Shift',
        'Alt',
        'Control',
        'Meta',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown'
      ]

      if (ignoreKeys.includes(key) || metaKey || ctrlKey || altKey) {
        return
      }

      if (key === 'Backspace') {
        setInput((oldInput) => oldInput.slice(0, -1))
        return
      }

      if (key === 'Enter') {
        const command = input.join('')
        execute(command)
        return
      }

      setInput((oldInput) => [...oldInput, key.toLowerCase()])
      scrollToBottom()
    },
    [input, setInput, execute]
  )

  useEffect(() => {
    if (!isActive) {
      return
    }

    // @ts-ignore
    document.addEventListener('keydown', onKeyDown)
    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, isActive])

  return (
    <div className={styles.input} data-active={String(isActive)}>
      {input.map((key, i) => (
        <span key={i}>{key}</span>
      ))}
    </div>
  )
}
