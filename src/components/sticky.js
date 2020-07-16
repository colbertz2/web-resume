import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Title from "./title"
import { SocialIconSm } from "./social-icon"

const StickyContainer = styled.div`
  position: fixed;
  top: 0;
  width: ${props => props.width}px;
  margin-bottom: 0;
  text-align: left;
  background-color: #fff;
  z-index: 100;
  padding-top: 1px;
  transform: ${props => (props.top ? "translate3d(0, -100vh, 0)" : "none")};
  transition-property: transform;
  transition-duration: 0.5s;
  transition-delay: 0;
  transition-timing-function: ease;
  visibility: ${props => (props.vis ? "visible" : "hidden")};
`

const StickyTitle = styled(Title)`
  display: inline-block;
`

const HR = styled.hr`
  margin-bottom: 0;
`

class Sticky extends React.Component {
  state = {
    isTop: true,
    width: 0,
    visible: true,
  }

  componentDidMount() {
    var bodyWidth = document.getElementById("react-all").clientWidth
    this.setState({ width: bodyWidth })

    var mobileSize = window.innerWidth < 550
    this.setState({ visible: !mobileSize })

    window.addEventListener("resize", () => {
      var bodyWidth = document.getElementById("react-all").clientWidth
      this.setState({ width: bodyWidth })

      var mobileSize = window.innerWidth < 550
      this.setState({ visible: !mobileSize })
    })

    document.addEventListener("scroll", () => {
      var bound = document
        .getElementById("react-header")
        .getBoundingClientRect()
      var t1 = bound.y + bound.height < 0
      var t2 = bound.y > window.innerHeight
      // var ypos = window.pageYOffset
      this.setState({ isTop: !(t1 || t2) })
    })
  }

  render() {
    return (
      <StickyContainer
        top={this.state.isTop}
        width={this.state.width}
        vis={this.state.visible}
      >
        <Link to={"/"}>
          <StickyTitle>{this.props.author}</StickyTitle>
        </Link>
        <SocialIconSm url="/contact" network="email" />
        <SocialIconSm url="https://github.com/colbertz2" />
        <SocialIconSm url="https://www.linkedin.com/in/zach-colbert" />
        <SocialIconSm url="https://twitter.com/zach_colbert" />
        <HR />
      </StickyContainer>
    )
  }
}

export default Sticky
