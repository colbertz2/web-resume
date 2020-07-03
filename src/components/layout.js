// Default page layout wrapper
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      {/* Global styles here */}

      {/* Site Body */}
      <div>
        {/* Site Header */}
        <div>
          <Link to={"/"}>
            <h1>{data.site.siteMetadata.author}</h1>
          </Link>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  )
}
