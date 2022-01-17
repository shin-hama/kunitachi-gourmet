import * as React from "react"
import { WindowLocation } from '@reach/router'
import { Link } from "gatsby"

type Props = {
  location: WindowLocation
  title?: string
  children: React.ReactElement[]
}
const Layout: React.FC<Props> = ({ location, title, children }) => {
  const isRootPath = location.pathname === "/"
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
