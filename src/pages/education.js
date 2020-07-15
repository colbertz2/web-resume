import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Section, Subsection } from "../components/section"
import { List, Item } from "../components/list"

export default () => (
  <Layout>
    <Section title="Education">
      <Subsection title="Oregon State University" aside="Corvallis, OR">
        <p>Bachelor of Science in Physics, awarded June 2020.</p>
        <List>
          <Item>
            <b>Concentration</b>: Computational Physics
          </Item>
          <Item>
            <b>Minor</b>: Computer Science
          </Item>
          <Item>
            <b>Undergraduate thesis</b>:<br />
            <Link href={"zc-thesis.pdf"}>
              <em>
                Development of a Visible-Light Photoluminescence
                Microspectrometer
              </em>
            </Link>
          </Item>
          <Item>
            <b>Notable courses</b>:
            <List>
              <Item>Computational Physics (3-course series)</Item>
              <Item>Scientific Computing I/II</Item>
              <Item>Operating Systems</Item>
              <Item>Cryptography</Item>
              <Item>Introduction to Security</Item>
              <Item>Open Source Software</Item>
            </List>
          </Item>
        </List>
      </Subsection>
    </Section>
  </Layout>
)
