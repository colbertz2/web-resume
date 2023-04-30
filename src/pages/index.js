import React from "react"

import Layout from "../components/layout"
import { Section, Subsection } from "../components/section"
import Work from "../components/work"

export default () => (
  <Layout>
    <Section title="Work Experience" link="/work">
      <Work
        title="Desktop Technician"
        company="Sigma Design, Inc."
        start="Sept 2021"
        end="Present"
      />

      <Work
        title="IT Technician"
        company="TEC Equipment"
        start="April 2021"
        end="Sept 2021"
      />

      <Work
        title="Information Technology Consultant"
        company="TEKsystems"
        start="February 2021"
        end="April 2021"
      />

      <Work
        title="Lead Student IT Technician"
        company="Oregon State University"
        start="Nov 2016"
        end="July 2020"
      />

      <Work
        title="Resident Camp Director"
        company="Oregon Trail Council, Boy Scouts of America"
        start="Jun 2019"
        end="Feb 2021"
      />
    </Section>

    <Section title="Education" link="/education">
      <Subsection title="Oregon State University" aside="Corvallis, OR">
        <p>Bachelor of Science in Physics, awarded June 2020.</p>
      </Subsection>
    </Section>

    <Section title="Volunteer Work" link="/volunteer"></Section>

    <Section title="Awards and Honors" link="/awards"></Section>
  </Layout>
)
