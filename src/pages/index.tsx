import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

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
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title || post.slug || 'No Title'
          console.log(post.id)

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article">
                <header>
                  <ArticleCard
                    title={title}
                    slug={post.slug || ''}
                    publishedAt={post.publishedAt || ''}
                    image={post.heroImage?.gatsbyImageData}
                  />
                </header>
              </article>
            </li>
          )
        })}
      </ol>
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
        publishedAt(formatString: "MMMM DD, YYYY")
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`
