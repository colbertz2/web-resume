import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import Work from "../components/work"
import { List, Item } from "../components/list"

export default () => (
  <Layout>
    <Section title="Work Experience">
      <Work
        title="Lead Student IT Technician"
        company="Oregon State University"
        start="Nov 2016"
        end="July 2020"
      >
        <List>
          <Item>
            Provide high-quality remote, walk-up, and on-site desktop support
            for an enterprise customer base of tens of thousands of users on 
    		both Windows and MacOS devices.
          </Item>
          <Item>
            Mentor student staff by providing actionable feedback and teaching
            skills. Contribute articles to in-house knowledge base.
          </Item>
          <Item>
            Manage directory and email services with Active Directory and
            Microsoft Exchange 2010.
          </Item>
          <Item>
            Maintain and contribute to a private repository of PowerShell tools
            using Git and GitHub.
          </Item>
          <Item>
            Deploy software packages and configuration profiles to macOS
            endpoints with Jamf Pro.
          </Item>
        </List>
      </Work>

      <Work
        title="Resident Camp Director"
        company="Oregon Trail Council, BSA"
        start="Jun 2019"
        end="Present"
      >
        <List>
          <Item>Interview, hire, and onboard seasonal staff members.</Item>
          <Item>
            Conduct one week of staff training and camp setup, including
            sessions on effective teaching and learning, crisis management, and
            child abuse prevention.
          </Item>
          <Item>
            Provide leadership to a team of 35 staff ranging in age from 14 to
            75 years old.
          </Item>
          <Item>
            Set policies to ensure camp-wide compliance with National Camp
            Accreditation Program standards set by the BSA.
          </Item>
        </List>
      </Work>

      <Work
        title="Undergraduate Student Researcher"
        company="Oregon State University"
        start="Jun 2018"
        end="Sep 2018"
      >
        <List>
          <Item>Set research goals for senior thesis project.</Item>
          <Item>
            Review literature, obtain supplies and equipment in support of
            research goals.
          </Item>
          <Item>Maintain optical equipment and clean shared lab spaces.</Item>
          <Item>
            Report results at weekly group meetings. Perform other duties as
            necessary to support the research goals of the group and other
            researchers.
          </Item>
        </List>
      </Work>

      <Work
        title="Stylist"
        company="Levi Strauss & Co."
        start="Nov 2014"
        end="Jun 2020"
      >
        <List>
          <Item>
            Provide excellent customer service by guiding consumers to the
            products they are looking for.
          </Item>
          <Item>
            Maintain in-depth knowledge of core and seasonal products.
          </Item>
          <Item>
            Ensure the sales floor is well-stocked, and process incoming
            freight.
          </Item>
          <Item>Clean workspaces and the sales floor.</Item>
        </List>
      </Work>
    </Section>
  </Layout>
)
