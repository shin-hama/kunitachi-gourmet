import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import Stack from '@mui/material/Stack'

import ArticleCard from '../components/articleCard'
// import Bio from "../components/bio"
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allContentfulPost.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        {/* <Bio /> */}
        <p>
          {
            'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'
          }
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}
      <Stack spacing={1}>
        {posts.map(post => {
          const title = post.title || post.slug || 'No Title'
          console.log(post.id)
          return (
            <ArticleCard
              key={post.slug}
              title={title}
              slug={post.slug || ''}
              publishedAt={post.publishedAt || ''}
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
        publishedAt(formatString: "YYYY-MM-DD")
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`
