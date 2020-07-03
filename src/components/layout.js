// Default page layout wrapper
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import headerImg from "../img/zach.jpg"

const HeaderLg = props => {
  const Container = styled.div`
    text-align: center;
    margin-bottom: ${rhythm(2)};
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #fff;
  `
  return (
    <Container>
      <Link to={"/"}>
        <HeaderImg src={headerImg} />
        <Title>{props.author}</Title>
      </Link>
      <Tagline>{props.description}</Tagline>
      <hr />
    </Container>
  )
}

const HeaderImg = props => (
  <div>
    <img
      src={props.src}
      alt={props.alt}
      css={css`
        border-radius: 50%;
        min-width: ${rhythm(5)};
        max-width: 30%;
        border: 2px solid black;
        margin-top: ${rhythm(0.6)};
        margin-bottom: 0;
      `}
    />
  </div>
)

const Title = styled.h1`
  margin: ${rhythm(0.5)};
  // margin-bottom: ${rhythm(0.5)};
`

const Tagline = ({ children }) => (
  <div
    css={css`
      margin-bottom: ${rhythm(1)};
    `}
  >
    <em
      css={css`
        font-size: 0.9em;
      `}
    >
      {children}
    </em>
  </div>
)

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
    <div>
      {/* Global Styles */}
      <Global
        styles={css`
          body {
            margin: auto;
            width: 70%;
            max-width: 750px;
          }
        `}
      />
      {/* Site Body */}
      <div>
        {/* Site Header */}
        <HeaderLg
          author={data.site.siteMetadata.author}
          description={data.site.siteMetadata.description}
        />

        {/* Page Content */}
        <Body>{children}</Body>
      </div>
    </div>
  )
}
