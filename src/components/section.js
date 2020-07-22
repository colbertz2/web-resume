import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { options, rhythm } from "../utils/typography"
import Pad from "./pad"

import chevron from "../img/chevron.png"

const Chevron = () => (
  <img
    src={chevron}
    alt=""
    css={css`
      float: right;
      width: ${rhythm(0.6)};
    `}
  />
)

const hover = css`
  text-decoration: underline;
  text-decoration-color: ${options.headerColor};
  &:hover {
    text-decoration: none;
    // text-decoration-color: ${options.headerColor};
  }
`

const Section = props => {
  const Header = styled.h2`
    &:after {
      width: 50%;
      content: " ";
      background: url(${chevron}) no-repeat left center;
    }
  `

  return (
    <div>
      <Link to={props.link} css={props.link ? hover : null}>
        <Header>
          {props.title}
          {/* <Chevron /> */}
        </Header>
      </Link>
      <Pad>{props.children}</Pad>
      <hr />
    </div>
  )
}

const Subsection = props => {
  const SubHeader = styled.h3`
    margin-top: 0;
    margin-bottom: ${rhythm(0.25)};
  `

  return (
    <div
      css={css`
        margin-bottom: ${rhythm(1.5)};
      `}
    >
      <div
        css={css`
          margin-bottom: ${rhythm(0.5)};
        `}
      >
        <Link to={props.link} css={props.link ? hover : null}>
          <SubHeader>{props.title}</SubHeader>
        </Link>
        <em>{props.subtitle}</em>
      </div>
      <Pad>{props.children}</Pad>
    </div>
  )
}

export default Section
export { Section, Subsection }
