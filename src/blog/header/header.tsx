import Link from 'next/link'
import styles from './header.module.css'
import { RssButton, ThemeButton, LinkedinButton, GithubButton } from '../ui'
import { HeaderEffect } from './header-effect'

const header = `
  ██╗   ██╗██╗      █████╗ ██████╗ ██╗███╗   ███╗██╗██████╗     ██╗   ██╗ ██████╗ ██╗   ██╗██╗  ██╗
  ██║   ██║██║     ██╔══██╗██╔══██╗██║████╗ ████║██║██╔══██╗    ██║   ██║██╔═══██╗██║   ██║██║ ██╔╝
  ██║   ██║██║     ███████║██║  ██║██║██╔████╔██║██║██████╔╝    ██║   ██║██║   ██║██║   ██║█████╔╝
  ╚██╗ ██╔╝██║     ██╔══██║██║  ██║██║██║╚██╔╝██║██║██╔══██╗    ╚██╗ ██╔╝██║   ██║╚██╗ ██╔╝██╔═██╗
██╗╚████╔╝ ███████╗██║  ██║██████╔╝██║██║ ╚═╝ ██║██║██║  ██║     ╚████╔╝ ╚██████╔╝ ╚████╔╝ ██║  ██╗
╚═╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝      ╚═══╝   ╚═════╝   ╚═══╝  ╚═╝  ╚═╝

`

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderEffect />

      <div className={styles.content}>
        <Link href="/blog" className={styles.link}>
          <pre className={styles.logo}>{header}</pre>
        </Link>
        <div className={styles.buttons}>
          <LinkedinButton />
          <GithubButton />
          <RssButton />
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}
