'use client'
import { Sun, Moon, SunMoon } from 'lucide-react'
import styles from './ThemeButton.module.css'
import { useTheme } from './ThemeProvider'
import { useEffect } from 'react'

const lightSound = '/sounds/key-1.wav'
const darkSound = '/sounds/key-5.wav'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    // preload audio
    new Audio(lightSound)
    new Audio(darkSound)
  }, [])

  const onClick = () => {
    toggleTheme()
    if (theme === 'light') {
      const audio = new Audio(lightSound)
      audio.play()
    } else {
      const audio = new Audio(darkSound)
      audio.play()
    }
  }

  return (
    <button className={styles.themeButton} onClick={onClick}>
      {theme === 'light' ? <Sun /> : theme === 'dark' ? <Moon /> : <SunMoon />}
    </button>
  )
}
