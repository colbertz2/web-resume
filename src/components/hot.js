import React from "react"

const HotTakes = props => {
  var rows = []
  for (var k in props.table) {
    rows.push(
      <tr>
        <td>{k}</td>
        <td>{props.table[k]}</td>
      </tr>
    )
  }

  return (
    // Add table headers as children if you want them
    <table>
      {props.children}
      {rows}
    </table>
  )
}

export default HotTakes
