import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <table>
      <tr>
        <td>
          <b>Email</b>
        </td>
        <td>zach.colbert20 AT gmail.com</td>
      </tr>
      <tr>
        <td>
          <b>PGP Key</b>
        </td>
        <td>
          <Link to="/zcolbert-pgp.asc">
            B627 DBC9 C46A 1470 385E 098A 8BE8 EBCA 4CE2 FDE6
          </Link>
        </td>
      </tr>
      <tr>
        <td>
          <b>Twitter</b>
        </td>
        <td>
          <a href="https://twitter.com/zach_colbert">@zach_colbert</a>
        </td>
      </tr>
      <tr>
        <td>
          <b>LinkedIn</b>
        </td>
        <td>
          <a href="https://www.linkedin.com/in/zach-colbert">zach-colbert</a>
        </td>
      </tr>
      <tr>
        <td>
          <b>GitHub</b>
        </td>
        <td>
          <a href="https://github.com/colbertz2">colbertz2</a>
        </td>
      </tr>
    </table>
  </Layout>
)
