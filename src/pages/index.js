import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const Pad = styled.div`
  padding-left: 15px;
`

const Section = props => (
  <div>
    <h2>{props.title}</h2>
    <Pad>{props.children}</Pad>
    <hr />
  </div>
)

const Subsection = props => {
  const SubHeader = styled.h3`
    margin-top: 0;
    margin-bottom: ${rhythm(0.25)};
  `

  return (
    <div
      css={css`
        margin-bottom: ${rhythm(1.5)};
      `}
    >
      <div
        css={css`
          margin-bottom: ${rhythm(0.5)};
        `}
      >
        <SubHeader>{props.title}</SubHeader>
        <em>{props.subtitle}</em>
      </div>
      <Pad>{props.children}</Pad>
    </div>
  )
}

const Work = props => {
  var subtitle = ``
  if (props.company) {
    subtitle = `${props.start} \u2014 ${props.end} | ${props.company}`
  } else {
    subtitle = `${props.start} \u2014 ${props.end}`
  }

  return (
    <Subsection title={props.title} subtitle={subtitle}>
      {props.children}
    </Subsection>
  )
}

const Award = props => {
  var subtitle = ``
  if (props.org) {
    subtitle = `${props.date} | ${props.org}`
  } else {
    subtitle = `${props.date}`
  }

  return (
    <Subsection title={props.name} subtitle={subtitle}>
      {props.children}
    </Subsection>
  )
}

const List = styled.ul`
  margin-top: 0;
`
const LItem = styled.li`
  margin-bottom: ${rhythm(0.2)};
`

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
          <LItem>
            <b>Concentration</b>: Computational Physics
          </LItem>
          <LItem>
            <b>Minor</b>: Computer Science
          </LItem>
          <LItem>
            <b>Undergraduate thesis</b>:<br />
            <Link href={"zc-thesis.pdf"}>
              <em>
                Development of a Visible-Light Photoluminescence
                Microspectrometer
              </em>
            </Link>
          </LItem>
          <LItem>
            <b>Notable courses</b>:
            <List>
              <LItem>Computational Physics (3-course series)</LItem>
              <LItem>Scientific Computing I/II</LItem>
              <LItem>Operating Systems</LItem>
              <LItem>Cryptography</LItem>
              <LItem>Introduction to Security</LItem>
              <LItem>Open Source Software</LItem>
            </List>
          </LItem>
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
      <table>
        <tr>
          <td>CLI Editor</td>
          <td>Vim</td>
        </tr>
      </table>
    </Section>
  </Layout>
)
