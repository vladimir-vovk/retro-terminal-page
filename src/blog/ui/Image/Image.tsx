'use client'

import { useState } from 'react'
import clsx from 'clsx'
import styles from './Image.module.css'

type Props = {
  src: string
  thumbhash: string
  className?: string
  alt?: string
}

export const Image = ({ src, thumbhash, className, alt }: Props) => {
  const defaultAlt = 'Post cover image'
  const [loading, setLoading] = useState(true)
  /* Strange Chrome behaviour. Removes "white border"
     at the bottom-right. */
  const thumbhashStyle = { backgroundColor: 'white' }

  const onLoad = () => {
    setLoading(false)
  }

  const ref = (img: HTMLImageElement) => {
    if (img?.complete) {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      {thumbhash ? (
        <img
          aria-hidden="true"
          alt=""
          style={thumbhashStyle}
          className={styles.thumbhash}
          src={thumbhash}
        />
      ) : null}

      <img
        loading="lazy"
        alt={alt ?? defaultAlt}
        src={src}
        className={clsx(styles.image, !loading && styles.visible, className)}
        onLoad={onLoad}
        ref={ref}
      />
    </div>
  )
}
