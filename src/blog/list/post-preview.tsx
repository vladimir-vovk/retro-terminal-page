import Link from 'next/link'
// import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { thumbHashToDataURL } from 'thumbhash'
import { Code } from '@/blog/ui'
import { PostMetaData } from '../types'
import { formatDate } from '../utils'
import styles from './post-preview.module.css'
import { generateThumbHash, base64ToUint8Array } from '../utils'
import { Image } from '@/blog/ui'

type Props = {} & PostMetaData

export const PostPreview = async ({
  title,
  createdAt,
  desc,
  slug,
  coverImage,
  coverAlt
}: Props) => {
  const postUrl = `/blog/${slug}`
  const thumbhash = await generateThumbHash(coverImage)
  const thumbhashSrc = thumbHashToDataURL(base64ToUint8Array(thumbhash))

  return (
    <article className={styles.article}>
      <Link href={postUrl} className={styles.headerLink}>
        <h1>{title}</h1>
      </Link>
      <time dateTime={createdAt} className={styles.createdAt}>
        {formatDate(createdAt)}
      </time>
      <div className={styles.cover}>
        <Image
          className={styles.coverImage}
          src={coverImage}
          thumbhash={thumbhashSrc}
          alt={coverAlt}
        />
      </div>
      <MDXRemote
        source={desc}
        components={{
          pre: Code
        }}
      />
      <div className={styles.readMore}>
        <Link href={postUrl} className={styles.readMoreLink}>
          Read more →
        </Link>
      </div>
    </article>
  )
}
