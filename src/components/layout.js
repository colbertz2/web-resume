// Default page layout wrapper
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const Header = styled.div`
  text-align: center;
  margin-bottom: ${rhythm(1)};
`

const Title = styled.h1`
  margin-bottom: ${rhythm(0.5)};
`

const Tagline = styled.em`
  font-size: 0.9em;
`

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
      {/* Global Styles */}
      <Global
        styles={css`
          body {
            margin: auto;
            width: 60%;
          }
        `}
      />
      {/* Site Body */}
      <div>
        {/* Site Header */}
        <Header>
          <Link to={"/"}>
            <Title>{data.site.siteMetadata.author}</Title>
          </Link>
          <Tagline>Zach is a guy looking for a job.</Tagline>
        </Header>
        <hr />

        {/* Page Content */}
        {children}
      </div>
    </div>
  )
}
