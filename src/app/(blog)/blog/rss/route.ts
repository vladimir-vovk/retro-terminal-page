import RSS, { FeedOptions } from 'rss'
import { BLOG_TITLE as title, BLOG_DESCRIPTION as description, BLOG_URL } from '@/blog/constants'
import { getBlogPosts } from '@/blog/utils'

export const GET = async () => {
  const feed = new RSS({
    title,
    description
  } as FeedOptions)

  const posts = await getBlogPosts()
  posts.forEach(({ title, desc: description, createdAt: date, slug }) => {
    feed.item({
      title,
      description,
      date,
      url: `${BLOG_URL}/${slug}`
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
