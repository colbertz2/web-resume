import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

import Title from "./title"
import headerImg from "../img/zach.jpg"
import { SocialIconLg } from "../components/social-icon"

const HeaderContainer = styled.header`
  margin-bottom: ${rhythm(2)};
  top: 0;
  text-align: center;
  background-color: #fff;
  z-index: 100;
  padding-top: 1px;
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
    visible: true,
  }

  componentDidMount() {
    var windowTooSmall = window.innerWidth < 300
    this.setState({ visible: !windowTooSmall })

    window.addEventListener("resize", () => {
      var windowTooSmall = window.innerWidth < 300
      this.setState({ visible: !windowTooSmall })
    })
  }

  render() {
    return (
      <HeaderContainer id="react-header">
        <Link to="/">
          <HeaderImg src={headerImg} />
          <Title>{this.props.author}</Title>
        </Link>
        <Tagline>{this.props.tagline}</Tagline>
        {this.state.visible
          ? [
              <SocialIconLg
                url="https://twitter.com/zach_colbert"
                label="Twitter"
              />,
              <SocialIconLg
                url="https://www.linkedin.com/in/zach-colbert"
                label="LinkedIn"
              />,
              <SocialIconLg
                url="https://github.com/colbertz2"
                label="GitHub"
              />,
              <SocialIconLg url="/contact" network="email" label="Contact" />,
              <SocialIconLg url="https://blog.zcolbert.com" label="Blog" />,
            ]
          : null}
        <hr />
      </HeaderContainer>
    )
  }
}

export default Header
