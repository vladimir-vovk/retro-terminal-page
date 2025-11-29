import { Image } from '../Image'
import { thumbHashToDataURL } from 'thumbhash'
import { generateThumbHash, base64ToUint8Array, imageSize } from '@/blog/utils'
import styles from './ImageMdx.module.css'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const ImageMdx = async ({ src, alt }: Props) => {
  if (!src || !alt) {
    return null
  }

  const thumbhash = await generateThumbHash(src)
  const thumbhashSrc = thumbHashToDataURL(base64ToUint8Array(thumbhash))

  const { width, height } = await imageSize(src)
  const style = { height: `${Math.floor((height / width) * 100)}cqw` }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper} style={style}>
        <Image src={src} thumbhash={thumbhashSrc} alt={alt} />
      </div>
    </div>
  )
}
