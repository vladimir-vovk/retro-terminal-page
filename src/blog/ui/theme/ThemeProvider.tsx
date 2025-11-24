'use client'
import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from 'react'

const defaultTheme = 'light'
type ThemeType = 'light' | 'dark'

type ThemeContextType = {
  theme: ThemeType
  isDark: () => boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  isDark: () => false,
  toggleTheme: () => {}
})

type Props = {
  children: ReactElement
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme)

  const setThemeClass = (newTheme: ThemeType) => {
    const currentTheme = newTheme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.remove(currentTheme)
    document.documentElement.classList.add(newTheme)
  }

  useEffect(() => {
    const onChangeTheme = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light'
      setThemeClass(newTheme)
      setTheme(newTheme)
    }

    const colorThemeQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
    const initialTheme = colorThemeQuery.matches ? 'dark' : 'light'
    setTheme(initialTheme)

    colorThemeQuery.addEventListener('change', onChangeTheme)
    return () => {
      removeEventListener('change', onChangeTheme as (e: Event) => void)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'
      setThemeClass(newTheme)
      return newTheme
    })
  }, [theme])

  const isDark = useCallback(() => theme === 'dark', [theme])

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
