import { Post } from '@/blog'
import { loadBlogPost } from '@/blog/utils'

type Props = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params
  const post = await loadBlogPost(slug)

  if (post) {
    const { title, desc: description } = post.frontmatter

    return {
      title: `${title} - Vladimir Vovk`,
      description
    }
  }
}

const PostPage = async ({ params }: Props) => {
  const { slug } = await params

  return (
    <>
      <main>
        <Post {...{ slug }} />
      </main>
    </>
  )
}

export default PostPage
