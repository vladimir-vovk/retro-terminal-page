import { ReactElement } from 'react'
import './styles.css'
import { Metadata } from 'next'
import { BLOG_DESCRIPTION as description, BLOG_TITLE as title } from '@/blog/constants'
import { Header } from '@/blog'
import { ThemeProvider } from '@/blog/ui'

export const metadata: Metadata = {
  title,
  description
}

type Props = {
  children: ReactElement
}

export default function BlogRootLayout({ children }: Props) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  )
}
