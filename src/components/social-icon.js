import React from "react"
import { SocialIcon } from "react-social-icons"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const SocialIconLg = styled(SocialIcon)`
  margin: ${rhythm(1)};
  margin-top: 0;
`

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
