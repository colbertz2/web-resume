import React from "react"
import { Subsection } from "./section"

const Award = props => {
  var subtitle = ``
  if (props.org) {
    subtitle = `${props.date} | ${props.org}`
  } else {
    subtitle = `${props.date}`
  }

  return (
    <Subsection title={props.name} subtitle={subtitle}>
      {props.children}
    </Subsection>
  )
}

export default Award
