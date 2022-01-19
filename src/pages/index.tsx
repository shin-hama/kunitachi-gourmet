import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import Stack from '@mui/material/Stack'

import ArticleCard from '../components/articleCard'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const posts = data.allContentfulPost.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>
          {
            'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'
          }
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="All posts" />
      <Stack spacing={1}>
        {posts.map(post => {
          const title = post.title || post.slug || 'No Title'

          return (
            <ArticleCard
              key={post.slug}
              title={title}
              slug={post.slug || ''}
              publishedAt={post.createdAt || ''}
              image={post.heroImage?.gatsbyImageData}
            />
          )
        })}
      </Stack>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      nodes {
        id
        slug
        title
        tags
        description {
          description
        }
        createdAt(formatString: "YYYY-MM-DD")
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`
