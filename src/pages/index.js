import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Section, Subsection } from "../components/section"
import Work from "../components/work"
import Award from "../components/award"
import { List, Item } from "../components/list"

export default () => (
  <Layout>
    <p>
      Personal statement or intro paragraph. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Vivamus non metus et felis ornare
      sollicitudin a quis sem. Sed sed eros et nulla pulvinar euismod eu eget
      erat. Duis nec nulla lacus. Etiam quis porta neque. Maecenas ex urna,
      mollis eu vehicula sed, tincidunt ac justo. Nam commodo et risus eu
      vestibulum. Quisque cursus nunc urna. Mauris eleifend efficitur tellus.
      Sed nec porta mi. Vivamus mollis sapien quis tortor dignissim, non varius
      turpis vehicula. Curabitur eu nisl cursus, placerat nulla imperdiet,
      ultrices enim. Vivamus sit amet bibendum metus, mollis pretium nunc. Nulla
      dignissim semper lorem sit amet facilisis. Suspendisse ut augue lacus.
      Etiam tincidunt nisl est, ut commodo ante egestas nec.
    </p>

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

    <Section title="Work Experience">
      <p>Things that people have paid me to do for them.</p>
      <Work
        title="Lead Student IT Technician"
        company="Oregon State University"
        start="Nov 2016"
        end="July 2020"
      >
        <p>Description</p>
      </Work>

      <Work
        title="Undergraduate Student Researcher"
        company="Oregon State University"
        start="Jun 2018"
        end="Sep 2018"
      >
        <p>Description</p>
      </Work>

      <Work
        title="Stylist"
        company="Levi Strauss & Co."
        start="Nov 2014"
        end="Jun 2020"
      >
        <p>Description</p>
      </Work>
    </Section>

    <Section title="Volunteer Work">
      <p>
        Things that people have <em>not</em> paid me to do for them.
      </p>

      <Work
        title="Resident Camp Director"
        company="Oregon Trail Council, BSA"
        start="Jun 2019"
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
    </Section>

    <Section title="Awards and Honors">
      {/* <p>Shiny things.</p> */}

      <Award name="Eagle Scout" date="Mar 2015" org="Boy Scouts of America">
        {/* <p>Description</p> */}
      </Award>

      <Award name="Vigil Honor" date="Jun 2017" org="Order of the Arrow, BSA">
        {/* <p>Description</p> */}
      </Award>

      <Award
        name="Founders Award"
        date="Oct 2016"
        org="Order of the Arrow, BSA"
      >
        {/* <p>Description</p> */}
      </Award>
    </Section>

    <Section title="Hot Takes">
      <p>Tech things that I like and dislike.</p>
    </Section>
  </Layout>
)
