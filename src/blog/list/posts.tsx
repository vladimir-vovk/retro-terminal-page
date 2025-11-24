import { getBlogPosts } from '../utils'
import { PostPreview } from './post-preview'
import { PostMetaData } from '../types'
import { BLOG_DESCRIPTION as description } from '../constants'
import styles from './posts.module.css'

export const Posts = async () => {
  const posts = await getBlogPosts()

  return (
    <>
      <p className={styles.intro}>
        Hi and welcome to my blog! 👋
        <br />
        <span>{description}</span>
      </p>

      {posts.map((post: PostMetaData) => (
        <PostPreview {...post} key={post.slug} />
      ))}
    </>
  )
}
