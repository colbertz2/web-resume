// Default page layout wrapper
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import headerImg from "../img/zach.jpg"
var _ = require("lodash")

const HeaderContainer = styled.div`
  margin-bottom: ${rhythm(2)};
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
`

const HeaderSm = props => {
  const contStyle = css`
    text-align: left;
    padding-top: 1px;
  `

  return (
    <HeaderContainer css={contStyle}>
      <Link to={"/"}>
        <Title>{props.author}</Title>
      </Link>
      <hr />
    </HeaderContainer>
  )
}

const HeaderLg = props => {
  const hstyle = css`
    text-align: center;
  `
  return (
    <HeaderContainer css={hstyle}>
      <Link to={"/"}>
        <HeaderImg src={headerImg} />
        <Title>{props.author}</Title>
      </Link>
      <Tagline>{props.description}</Tagline>
      <hr />
    </HeaderContainer>
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
        font-size: 1em;
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

class Header extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount() {
    document.addEventListener(
      "scroll",
      _.throttle(() => {
        const isTop = window.scrollY == 0
        if (isTop !== this.state.isTop) {
          this.setState({ isTop })
        }
      }, 100)
    )
  }

  render() {
    if (this.state.isTop) {
      return (
        <HeaderLg
          author={this.props.author}
          description={this.props.description}
        />
      )
    } else {
      return (
        <HeaderSm
          author={this.props.author}
          description={this.props.description}
        />
      )
    }
  }
}

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
            padding-bottom: ${rhythm(1)};
          }
        `}
      />
      {/* Site Body */}
      <div>
        {/* Site Header */}
        <Header
          author={data.site.siteMetadata.author}
          description={data.site.siteMetadata.description}
        />

        {/* Page Content */}
        <Body>{children}</Body>
      </div>
    </div>
  )
}
