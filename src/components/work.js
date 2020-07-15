import React from "react"
import { Subsection } from "./section"

const Work = props => {
  var subtitle = ``
  if (props.company) {
    subtitle = `${props.start} \u2014 ${props.end} | ${props.company}`
  } else {
    subtitle = `${props.start} \u2014 ${props.end}`
  }

  return (
    <Subsection title={props.title} subtitle={subtitle}>
      {props.children}
    </Subsection>
  )
}

export default Work
