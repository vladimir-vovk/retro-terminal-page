import Link from 'next/link'
import { Rss } from 'lucide-react'
import styles from './RssButton.module.css'

export const RssButton = () => {
  return (
    <Link href="/blog/rss" className={styles.link}>
      <Rss />
    </Link>
  )
}
