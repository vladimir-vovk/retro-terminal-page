import { MDXRemote } from 'next-mdx-remote/rsc'
import { loadBlogPost, formatDate } from '../utils'
import { Code, Image, ImageMdx } from '@/blog/ui'
import { notFound } from 'next/navigation'
import styles from './post.module.css'
import { thumbHashToDataURL } from 'thumbhash'
import { generateThumbHash, base64ToUint8Array } from '../utils'

type Props = {
  slug: string
}

export const Post = async ({ slug }: Props) => {
  const post = await loadBlogPost(slug)

  if (!post) {
    notFound()
  }

  const { title, createdAt, coverImage, coverAlt } = post.frontmatter
  const { content } = post

  const thumbhash = await generateThumbHash(coverImage)
  const thumbhashSrc = thumbHashToDataURL(base64ToUint8Array(thumbhash))

  return (
    <article className={styles.container}>
      <div className={styles.cover}>
        <Image
          className={styles.coverImage}
          src={coverImage}
          thumbhash={thumbhashSrc}
          alt={coverAlt}
        />
      </div>
      <h1>{title}</h1>
      <time dateTime={createdAt}>{formatDate(createdAt)}</time>
      <MDXRemote
        source={content}
        components={{
          pre: Code,
          img: ImageMdx
        }}
      />
    </article>
  )
}
