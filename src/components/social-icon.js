import React from "react"
import { SocialIcon } from "react-social-icons"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const LgStyle = styled(SocialIcon)`
  margin: 5px ${rhythm(1)};
  // margin-top: 0;
`

const SocialIconLg = props => (
  <div
    css={css`
      display: inline-block;
      position: relative;
    `}
  >
    <LgStyle url={props.url} network={props.network} />
    <p>{props.label}</p>
  </div>
)

const iconSize = rhythm(1.2)
const SocialIconSm = props => (
  <SocialIcon
    url={props.url}
    network={props.network}
    style={{ width: iconSize, height: iconSize }}
    css={css`
      float: right;
      margin: ${rhythm(0.5)};
    `}
  />
)

export { SocialIconSm, SocialIconLg }
