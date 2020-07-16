import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import Work from "../components/work"

export default () => (
  <Layout>
    <Section title="Work Experience">
      <Work
        title="Lead Student IT Technician"
        company="Oregon State University"
        start="Nov 2016"
        end="July 2020"
      >
        {/* <p>Description</p> */}
      </Work>

      <Work
        title="Resident Camp Director"
        company="Oregon Trail Council, BSA"
        start="Jun 2019"
        end="Present"
      >
        {/* <p>Description</p> */}
      </Work>

      <Work
        title="Undergraduate Student Researcher"
        company="Oregon State University"
        start="Jun 2018"
        end="Sep 2018"
      >
        {/* <p>Description</p> */}
      </Work>

      <Work
        title="Stylist"
        company="Levi Strauss & Co."
        start="Nov 2014"
        end="Jun 2020"
      >
        {/* <p>Description</p> */}
      </Work>
    </Section>
  </Layout>
)
