import { useRef, useState, useEffect } from 'react'
import styles from './output.module.css'

type Props = {
  text?: string
  isActive: boolean
  onFinish?: () => void
  delay?: number
}

export const Output = ({ text, isActive, onFinish, delay = 30 }: Props) => {
  const [output, setOutput] = useState('')
  const isFinished = useRef(false)
  const intervalId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isActive) {
      intervalId.current = setInterval(() => {
        setOutput((oldOutput: any) => {
          const length = oldOutput.length + 1
          const textLength = text?.length ?? 0
          if (textLength >= length) {
            return text?.slice(0, length)
          }

          if (textLength <= length) {
            isFinished.current = true
          }

          return oldOutput || ''
        })

        if (isFinished.current) {
          onFinish?.()

          if (intervalId.current) {
            clearInterval(intervalId.current)
          }
        }
      }, delay)
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
    }
  }, [isActive, onFinish, text, delay])

  return (
    <span className={styles.output} data-active={String(isActive)}>
      {output}
    </span>
  )
}
