import { cache } from 'react'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { PostMetaData, PostRaw } from '../types'

const contentDir = '/src/blog/content/'

const getContentPath = (fileName: string) => {
  return `${contentDir}${fileName}`
}

export const getBlogPosts = async () => {
  const fileNames = await readDirectory(contentDir)

  const blogPosts: PostMetaData[] = []

  for (let fileName of fileNames) {
    const fullName = getContentPath(fileName)
    const rawContent = await readFile(fullName)

    const { data: frontmatter } = matter(rawContent)

    blogPosts.push({
      ...frontmatter
    } as PostMetaData)
  }

  return blogPosts.sort((p1, p2) => (p1.createdAt < p2.createdAt ? 1 : -1))
}

const getPostBySlug = async (slug: string) => {
  const nameEndsWith = `${slug}.mdx`
  const fileNames = await readDirectory(contentDir)

  return fileNames.filter((name) => name.endsWith(nameEndsWith))?.[0]
}

export const loadBlogPost = cache(async (slug: string): Promise<PostRaw | undefined> => {
  const fileName = await getPostBySlug(slug)
  if (!fileName) {
    return undefined
  }

  const fullName = getContentPath(fileName)
  const rawContent = await readFile(fullName)
  const { data: frontmatter, content } = matter(rawContent)

  return { frontmatter, content } as PostRaw
})

const readFile = (localPath: string) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}

const readDirectory = (localPath: string) => {
  return fs.readdir(path.join(process.cwd(), localPath))
}
