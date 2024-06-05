import { Output } from './output'
import styles from './link.module.css'

type Props = {
  text: string
  href: string
  isActive: boolean
  onFinish: () => void
}

export const Link = ({ text, href, isActive, onFinish }: Props) => {
  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <a className={styles.link} href={href} target="_blank" onMouseDown={onMouseDown}>
      <Output {...{ text, isActive, onFinish }} />
    </a>
  )
}
