import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import Work from "../components/work"
import { List, Item } from "../components/list"

export default () => (
  <Layout>
    <Section title="Volunteer Work">
      <Work
        title="Cascade AIDS Project"
        // company="Cascade AIDS Project"
        start="April 2022"
        end="Present"
      >
        <List>
          <Item>Weekly volunteer, sorting donations at Tod's Corner.</Item>
          <Item>Registration helper at annual Art Auction fundraiser.</Item>
          <Item>Route monitor at AIDS Walk NW.</Item>
        </List>
      </Work>

      <Work
        title="Administrative Adviser (Order of the Arrow)"
        company="Oregon Trail Council, BSA"
        start="October 2018"
        end="February 2021"
      >
        <List>
          <Item>
            Advise and support youth leaders in meeting the administrative,
            financial, and technology needs of the organization.
          </Item>
          <Item>
            <b>Administration</b>
            <List>
              <Item>
                Manage online event registration and membership renewal service.
              </Item>
              <Item>Supervise staff at event check-in.</Item>
              <Item>
                Administer access to member records system, cloud-based file
                storage, websites, and social media accounts.
              </Item>
              <Item>
                Provide office support for membership renewal mailings, print
                and electronic newsletters, and print materials for events.
              </Item>
            </List>
          </Item>
          <Item>
            <b>Finance</b>
            <List>
              <Item>
                Lead annual budget planning and approval sessions with youth
                leaders.
              </Item>
              <Item>
                Maintain ledger and assist youth leaders with reporting.
              </Item>
              <Item>
                Collect event and membership fees, and process reimbursement
                requests.
              </Item>
              <Item>
                Coordinate with professional accountant to perform periodic
                audits and manage the organization's assets.
              </Item>
            </List>
          </Item>
          <Item>
            <b>Techology</b>
            <List>
              <Item>
                Administer organization websites using Wordpress and LAMP stack.
              </Item>
              <Item>
                Manage the organization's computer, printer, and network
                equipment.
              </Item>
            </List>
          </Item>
        </List>
      </Work>

      <Work
        title="Assistant Scoutmaster"
        company="Boy Scouts of America"
        start="April 2015"
        end="February 2021"
      >
        <List>
          <Item>
            Teach outdoor skills including navigation, first aid, camping.
          </Item>
          <Item>
            Supervise scouts at weekly meetings and outdoor activities.
          </Item>
          <Item>
            Ensure compliance with national policies for safe activities and
            abuse prevention.
          </Item>
        </List>
      </Work>

      <Work
        title="Seasonal Camp Staff"
        company="Oregon Trail Council, BSA"
        start="July 2013"
        end="July 2019"
      >
        <List>
          <Item>
            Lead activities including: hiking, mountaineering, climbing, and
            rappelling.
          </Item>
          <Item>
            Ensure the safety of participants and staff during activities in and
            out of camp.
          </Item>
          <Item>
            Perform basic facilities and trail maintenance in camp as necessary.
          </Item>
        </List>
      </Work>
    </Section>
  </Layout>
)
