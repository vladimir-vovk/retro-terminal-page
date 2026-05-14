'use client'
import { Sun, Moon, SunMoon } from 'lucide-react'
import styles from './ThemeButton.module.css'
import { useTheme } from './ThemeProvider'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  const onClick = () => {
    toggleTheme()
    if (theme === 'light') {
      const audio = new Audio('/sounds/key-1.wav')
      audio.play()
    } else {
      const audio = new Audio('/sounds/key-5.wav')
      audio.play()
    }
  }

  return (
    <button className={styles.themeButton} onClick={onClick}>
      {theme === 'light' ? <Sun /> : theme === 'dark' ? <Moon /> : <SunMoon />}
    </button>
  )
}
