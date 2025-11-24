import { useState } from 'react'
import { ContentBlock as ContentBlockType, OutputElement } from './types'
import { Input } from './input'
import { Output } from './output'
import { Link } from './link'
import { Button } from './button'

type Props = Omit<ContentBlockType, 'id'> & {
  execute: (command: string) => void
  onFinishOutput: () => void
}

export const ContentBlock = ({
  isActive: isActiveBlock,
  elements,
  onFinishOutput,
  execute
}: Props) => {
  const [current, setCurrent] = useState(0)

  const onFinish = () => {
    if (current >= elements.length - 1) {
      /* content block render complete */
      onFinishOutput?.()
      return
    }

    setCurrent((oldCurrent) => oldCurrent + 1)
  }

  const renderElement = ({ id, ...props }: OutputElement, isLast: boolean) => {
    const isActive = isLast && isActiveBlock

    if (props.type === 'input') {
      const { text } = props
      return <Input key={id} {...{ execute, isActive, text, onFinish }} />
    } else if (props.type === 'text') {
      const { text, delay } = props
      return <Output key={id} {...{ text, isActive, onFinish, delay }} />
    } else if (props.type === 'link') {
      const { text, href } = props
      return <Link key={id} {...{ text, href, isActive, onFinish }} />
    } else if (props.type === 'button') {
      const { text, onPress } = props
      return <Button key={id} {...{ text, onPress, isActive, onFinish }} />
    }

    return null
  }

  return (
    <>{elements.slice(0, current + 1).map((element, i) => renderElement(element, i === current))}</>
  )
}
