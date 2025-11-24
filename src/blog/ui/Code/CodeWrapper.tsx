'use client'
import { ReactElement } from 'react'
import { useTheme } from '../theme'
import styles from './CodeWrapper.module.css'

type Props = {
  children: ReactElement
}

export const CodeWrapper = ({ children }: Props) => {
  const { theme } = useTheme()

  return (
    <div data-theme={theme} className={styles.wrapper}>
      {children}
    </div>
  )
}
