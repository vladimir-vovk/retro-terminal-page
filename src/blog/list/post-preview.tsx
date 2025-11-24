import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Code } from '@/blog/ui'
import { PostMetaData } from '../types'
import { formatDate } from '../utils'
import styles from './post-preview.module.css'

type Props = {} & PostMetaData

export const PostPreview = ({ title, createdAt, desc, slug, coverImage }: Props) => {
  const postUrl = `/blog/${slug}`

  return (
    <article className={styles.article}>
      <Link href={postUrl} className={styles.headerLink}>
        <h1 className={styles.title}>{title}</h1>
      </Link>
      <time dateTime={createdAt} className={styles.createdAt}>
        {formatDate(createdAt)}
      </time>
      <div className={styles.cover}>
        <Image
          className={styles.coverImage}
          src={coverImage}
          fill={true}
          objectFit="cover"
          alt="Post cover image"
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
