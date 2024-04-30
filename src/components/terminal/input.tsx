import { useEffect, KeyboardEvent, useState, useCallback, useRef } from 'react'
import { scrollToBottom } from './utils'
import styles from './input.module.css'
import { random } from './utils'

type Props = {
  text?: string
  isActive: boolean
  execute: (command: string) => void
  onFinish?: () => void
}

export const Input = ({ text, isActive, execute, onFinish }: Props) => {
  const [input, setInput] = useState<string>(text ?? '')
  const sounds = useRef<any[]>()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFinish?.()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  const playKeySound = (i: number) => {
    if (!sounds.current?.length) {
      return
    }

    const sound = sounds.current[i]
    sound.load()
    sound.play()
  }

  const playRandomKeySound = () => {
    if (!sounds.current?.length) {
      return
    }

    const sound = random(sounds.current)
    sound.load()
    sound.play()
  }

  useEffect(() => {
    if (!isActive) {
      return
    }

    sounds.current = Array.from({ length: 6 }).map((_, i) => new Audio(`sounds/key-${i + 1}.wav`))
  }, [isActive])

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
        playKeySound(1)
        return
      }

      if (key === 'Enter') {
        playKeySound(4)
        execute(input)
        return
      }

      setInput((oldInput) => `${oldInput}${key.toLowerCase()}`)
      playRandomKeySound()
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
      {input}
    </div>
  )
}
