import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import Award from "../components/award"

export default () => (
  <Layout>
    <Section title="Awards and Honors">
      <Award name="Eagle Scout" date="March 2015" org="Boy Scouts of America">
        {/* <p>Description</p> */}
      </Award>

      <Award name="Vigil Honor" date="June 2017" org="Order of the Arrow, BSA">
        {/* <p>Description</p> */}
      </Award>

      <Award
        name="Founder's Award"
        date="October 2016"
        org="Order of the Arrow, BSA"
      >
        {/* <p>Description</p> */}
      </Award>
    </Section>
  </Layout>
)
