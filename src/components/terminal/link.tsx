import { Output } from './output'
import styles from './link.module.css'

type Props = {
  text: string
  href: string
  isActive: boolean
  onFinish: () => void
}

export const Link = ({ text, href, isActive, onFinish }: Props) => {
  return (
    <a className={styles.link} href={href} target="_blank">
      <Output {...{ text, isActive, onFinish }} />
    </a>
  )
}
