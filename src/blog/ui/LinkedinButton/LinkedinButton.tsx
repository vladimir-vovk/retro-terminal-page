import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import styles from './LinkedinButton.module.css'

export const LinkedinButton = () => {
  return (
    <Link href="https://www.linkedin.com/in/vvovk" className={styles.link}>
      <Linkedin />
    </Link>
  )
}
