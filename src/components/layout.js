// Default page layout wrapper
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

import Header from "../components/header"
import Sticky from "../components/sticky"

const Body = styled.div`
  margin: auto;
  width: 90%;
`

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)

  return (
    <div id="react-all">
      {/* Global Styles */}
      <Global
        styles={css`
          body {
            margin: auto;
            width: 70%;
            max-width: 750px;
            padding-bottom: ${rhythm(1)};
          }

          a {
            background-image: none;
          }
        `}
      />
      {/* Site Body */}
      <div>
        {/* Scrolling Header */}
        <Sticky author={data.site.siteMetadata.author} />

        {/* Site Header */}
        <Header
          author={data.site.siteMetadata.author}
          tagline={data.site.siteMetadata.description}
        />

        {/* Page Content */}
        <Body>{children}</Body>
      </div>
    </div>
  )
}
