import { MDXRemote } from 'next-mdx-remote/rsc'
import { loadBlogPost, formatDate } from '../utils'
import { Code } from '@/blog/ui'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from './post.module.css'

type Props = {
  slug: string
}

export const Post = async ({ slug }: Props) => {
  const post = await loadBlogPost(slug)

  if (!post) {
    notFound()
  }

  const { title, createdAt, coverImage } = post.frontmatter
  const { content } = post

  return (
    <article className={styles.container}>
      <div className={styles.cover}>
        <Image
          className={styles.coverImage}
          src={coverImage}
          fill={true}
          objectFit="cover"
          alt="Post cover image"
        />
      </div>
      <h1>{title}</h1>
      <time dateTime={createdAt}>{formatDate(createdAt)}</time>
      <MDXRemote
        source={content}
        components={{
          pre: Code
        }}
      />
    </article>
  )
}
