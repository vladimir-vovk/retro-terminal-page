import Link from 'next/link'
import { Github } from 'lucide-react'
import styles from './GithubButton.module.css'

export const GithubButton = () => {
  return (
    <Link href="https://github.com/vladimir-vovk" className={styles.link}>
      <Github />
    </Link>
  )
}
