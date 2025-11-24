import Link from 'next/link'
import styles from './header.module.css'
import { RssButton, ThemeButton, LinkedinButton, GithubButton } from '../ui'

export const Header = () => {
  const header = `
  ██╗   ██╗██╗      █████╗ ██████╗ ██╗███╗   ███╗██╗██████╗     ██╗   ██╗ ██████╗ ██╗   ██╗██╗  ██╗
  ██║   ██║██║     ██╔══██╗██╔══██╗██║████╗ ████║██║██╔══██╗    ██║   ██║██╔═══██╗██║   ██║██║ ██╔╝
  ██║   ██║██║     ███████║██║  ██║██║██╔████╔██║██║██████╔╝    ██║   ██║██║   ██║██║   ██║█████╔╝
  ╚██╗ ██╔╝██║     ██╔══██║██║  ██║██║██║╚██╔╝██║██║██╔══██╗    ╚██╗ ██╔╝██║   ██║╚██╗ ██╔╝██╔═██╗
██╗╚████╔╝ ███████╗██║  ██║██████╔╝██║██║ ╚═╝ ██║██║██║  ██║     ╚████╔╝ ╚██████╔╝ ╚████╔╝ ██║  ██╗
╚═╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝      ╚═══╝   ╚═════╝   ╚═══╝  ╚═╝  ╚═╝

`

  return (
    <header className={styles.header}>
      <Link href="/blog" className={styles.link}>
        <pre className={styles.logo}>{header}</pre>
      </Link>
      <div className={styles.buttons}>
        <LinkedinButton />
        <GithubButton />
        <RssButton />
        <ThemeButton />
      </div>
    </header>
  )
}
