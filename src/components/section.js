import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { options, rhythm } from "../utils/typography"
import Pad from "./pad"

const hover = css`
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${options.headerColor};
  }
`

const Section = props => (
  <div>
    <Link to={props.link} css={props.link ? hover : null}>
      <h2>{props.title}</h2>
    </Link>
    <Pad>{props.children}</Pad>
    <hr />
  </div>
)

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
