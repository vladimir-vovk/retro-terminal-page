import styles from './page.module.css'
import { Terminal } from '@/terminal'

export default function Home() {
  return (
    <main className={styles.main}>
      <Terminal />
    </main>
  )
}
