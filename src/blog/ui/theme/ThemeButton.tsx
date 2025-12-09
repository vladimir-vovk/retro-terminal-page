'use client'
import { Sun, Moon, SunMoon } from 'lucide-react'
import styles from './ThemeButton.module.css'
import { useTheme } from './ThemeProvider'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  const onClick = () => {
    toggleTheme()
  }

  return (
    <button className={styles.themeButton} onClick={onClick}>
      {theme === 'light' ? <Sun /> : theme === 'dark' ? <Moon /> : <SunMoon />}
    </button>
  )
}
