import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby'

// import Bio from "../components/bio"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Timestamp from '../components/molecules/Timestamp'

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const { previous, next } = data

  if (post === undefined) {
    return <></>
  }
  console.log(post)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title || ''}
        description={post.description?.description || ''}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <Timestamp timestamp={post.publishedAt || ''} size="lg" />
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.body?.childMarkdownRemark?.html || '',
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer>{/* <Bio /> */}</footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
          <li>
            {previous && (
              <Link to={previous.slug || '404'} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug || '404'} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(id: { eq: $id }) {
      id
      body {
        childMarkdownRemark {
          html
        }
      }
      title
      publishedAt(formatString: "YYYY-MM-DD")
      description {
        description
      }
    }
    previous: contentfulPost(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: contentfulPost(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
