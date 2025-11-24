import { BLOG_TITLE } from '@/blog/constants'
import styles from './not-found.module.css'

export const metadata = {
  title: `404 Not Found - ${BLOG_TITLE}`
}

const paw = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠟⠛⠛⠛⠿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣴⣿⡟⠁⢀⣤⣀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣦⠀⠀⠀⠀
⠀⠀⠀⠀⣾⡿⠿⠛⠁⣰⣿⣿⣿⡆⠀⠀⣴⣶⣶⠄⠀⢻⣿⡄⠀⠀⠀
⠀⠀⣾⡿⠁⠀⠀⠀⠀⠻⣿⣿⣿⠃⠀⣼⣿⣿⣿⠀⠀⠀⢿⣷⣄⠀⠀
⠀⣾⣿⠁⠀⣤⣶⡄⠀⠀⠈⠉⠁⠀⠀⠈⠛⠊⠁⠀⠀⠀⠀⠙⢿⣷⠀
⠀⣿⡇⠀⢸⣿⣿⡿⡆⠀⠀⣴⣶⣶⣴⣶⣄⠀⠀⢠⣶⣿⣦⠀⠀⣿⡇
⠀⣿⡇⠀⠀⠛⠙⠉⠀⣰⣿⣿⣿⣿⣿⣿⣿⣇⠀⣿⣿⣿⣿⠀⠀⣿⡇
⠀⣿⣇⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣷⣿⣷⡀⠀⠉⠉⠀⠀⣸⣿⠇
⠀⣿⣿⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣻⡟⠘
⠀⢹⣿⠀⠀⠀⠀⠀⠉⠛⠉⠁⠉⠁⠙⠻⠿⠟⠀⠀⠀⠀⠀⣾⣿⠁⠀
⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡏⠀⠀
⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
⠀⠀⣻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
⠀⠀⢸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
`

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <pre className={styles.image}>{paw}</pre>
      <h1>404 Not Found</h1>
      <p>This page does not exist. Please check the URL and try again.</p>
    </div>
  )
}

export default NotFound
