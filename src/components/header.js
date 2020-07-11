import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import headerImg from "../img/zach.jpg"
import { SocialIconSm, SocialIconLg } from "../components/social-icon"
var _ = require("lodash")

const HeaderContainer = styled.div`
  margin-bottom: ${rhythm(2)};
  top: 0;
  background-color: #fff;
  text-align: center;
`

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

class Header extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount() {}

  render() {
    return (
      <HeaderContainer>
        <Link to="/">
          <HeaderImg src={headerImg} />
          <Title>{this.props.author}</Title>
        </Link>
        <Tagline>{this.props.tagline}</Tagline>
        <SocialIconLg url="https://twitter.com/zach_colbert" />
        <SocialIconLg url="https://www.linkedin.com/in/zach-colbert" />
        <SocialIconLg url="https://github.com/colbertz2" />
        <hr />
      </HeaderContainer>
    )
  }
}

export default Header
