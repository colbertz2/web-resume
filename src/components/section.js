import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { options, rhythm } from "../utils/typography"
import Pad from "./pad"

const hover = css`
  text-decoration: underline;
  text-decoration-color: ${options.headerColor};
  &:hover {
    text-decoration: none;
  }
`

const ReadMore = props => {
  // const ptIndex = options.baseFontSize.indexOf("pt")
  // const baseSize = parseInt(options.baseFontSize.substring(0, ptIndex))
  // const size = baseSize - 1

  const Text = styled.p`
    font-size: ${rhythm(0.8)};
  `

  return (
    <Link to={props.link}>
      <Text>
        <em>Read More</em>
      </Text>
    </Link>
  )
}

const Section = props => {
  const Header = styled.h2``

  return (
    <div>
      <Link to={props.link} css={props.link ? hover : null}>
        <Header>
          {props.title}
          {/* <Chevron /> */}
        </Header>
      </Link>
      <Pad>
        {props.children}
        {props.link ? <ReadMore link={props.link} /> : null}
      </Pad>
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
