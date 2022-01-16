import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.microcmsBlogPosts
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.title} description={post.description || ""} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.publishedAt}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.body }}
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
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.frontmatter.title} →
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
    microcmsBlogPosts(id: { eq: $id }) {
      id
      body
      title
      publishedAt(formatString: "MMMM DD, YYYY")
      description
    }
    previous: microcmsBlogPosts(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: microcmsBlogPosts(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
