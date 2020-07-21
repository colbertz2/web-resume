import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import Work from "../components/work"
import { List, Item } from "../components/list"

export default () => (
  <Layout>
    <Section title="Volunteer Work">
      <Work
        title="Administrative Adviser (Order of the Arrow)"
        company="Oregon Trail Council, BSA"
        start="Oct 2018"
        end="Present"
      >
        <List>
          <Item>
            Advise youth leaders on administrative, financial, and technology
            needs of the organization.
          </Item>
          <Item>
            Guide youth leaders through annual budget planning and approval
            sessions.
          </Item>
          <Item>
            Manage online registration service for five or more events of 85+
            per year. Supervise staff at event check-in.
          </Item>
          <Item>
            Administer organization websites using Wordpress and LAMP stack.
          </Item>
          <Item>Manage the organization's computer and printer resources.</Item>
          <Item>
            Administer access to member records system, cloud-based file
            storage, websites, and social media accounts.
          </Item>
          <Item>
            Track revenue and expenses throughout the year, and assist youth
            leadership in reporting. Collect membership renewal and event
            registration fees throughout the year, and process reimbursement
            requests.
          </Item>
          <Item>
            Coordinate with professional accountant to perform periodic audits
            and manage the organization's assets.
          </Item>
          <Item>
            Provide office support for membership renewal mailings, print and
            electronic newsletters, fliers and handouts for events.
          </Item>
        </List>
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
