import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import Work from "../components/work"

export default () => (
  <Layout>
    <Section title="Volunteer Work">
      <Work
        title="Administrative Adviser (Order of the Arrow)"
        company="Oregon Trail Council, BSA"
        start="Oct 2018"
        end="Present"
      >
        {/* <p>Description</p> */}
      </Work>

      <Work
        title="Assistant Scoutmaster"
        company="Boy Scouts of America"
        start="Apr 2015"
        end="Present"
      >
        {/* <p>Description</p> */}
      </Work>

      <Work
        title="Seasonal Camp Staff"
        company="Oregon Trail Council, BSA"
        start="Jul 2013"
        end="Jul 2019"
      >
        {/* <p>Description</p> */}
      </Work>
    </Section>
  </Layout>
)
