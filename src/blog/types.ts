export type PostMetaData = {
  slug: string
  title: string
  desc: string
  createdAt: string
  coverImage: string
  coverAlt?: string
}

export type PostRaw = {
  frontmatter: PostMetaData
  content: string
}
