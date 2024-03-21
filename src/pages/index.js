import React from "react"

import Layout from "../components/layout"
import { Section, Subsection } from "../components/section"
import Work from "../components/work"
import Award from "../components/award"
import { List, Item } from "../components/list"

export default () => (
  <Layout>
    <Section title="Skills and Technologies">
      <Subsection title="Information Technology">
        <List>
          <Item>Windows Administration and Deployment</Item>
          <Item>Windows Powershell</Item>
          <Item>Microsoft Endpoint Manager</Item>
          <Item>Microsoft Exchange</Item>
          <Item>Active Directory</Item>
          <Item>Desktop/Laptop Hardware</Item>
          <Item>Network Administration</Item>
          <Item>Linux Administration</Item>
        </List>
      </Subsection>
      <Subsection title="Software Development">
        <List>
          <Item>Git</Item>
          <Item>Python</Item>
          <Item>C / C++</Item>
        </List>
      </Subsection>
      <Subsection title="Other">
        <List>
          <Item>Good at tying knots</Item>
          <Item>Mandolin owner</Item>
          <Item>Loves dogs</Item>
        </List>
      </Subsection>
    </Section>
    
    <Section title="Work Experience" link="/work">
      <Work
        title="Systems Administrator"
        company="Sigma Design, Inc."
        start="January 2024"
        end="Present"
      />
      
      <Work
        title="Desktop Technician"
        company="Sigma Design, Inc."
        start="September 2021"
        end="January 2024"
      />

      <Work
        title="IT Technician"
        company="TEC Equipment"
        start="April 2021"
        end="September 2021"
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
        start="November 2016"
        end="July 2020"
      />
    </Section>

    <Section title="Education" link="/education">
      <Subsection title="Oregon State University" aside="Corvallis, OR">
        <p>Bachelor of Science in Physics, awarded June 2020.</p>
      </Subsection>
    </Section>

    <Section title="Volunteer Work" link="/volunteer">
      <Work
        title="Cascade AIDS Project"
        start="April 2022"
        end="Present"
      />
    </Section>

    <Section title="Awards and Honors" link="/awards">
      <Award
        name="Eagle Scout"
        date="March 2015"
      />
    </Section>
  </Layout>
)
