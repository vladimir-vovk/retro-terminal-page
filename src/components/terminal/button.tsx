import { Output } from './output'
import styles from './button.module.css'

type Props = {
  text: string
  onPress: () => void
  isActive: boolean
  onFinish: () => void
}

export const Button = ({ text, onPress, isActive, onFinish }: Props) => (
  <button className={styles.button} onClick={onPress}>
    <Output {...{ text, isActive, onFinish }} />
  </button>
)
