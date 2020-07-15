import React from "react"

import Layout from "../components/layout"
import { Section, Subsection } from "../components/section"
import Work from "../components/work"
import Award from "../components/award"

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

    <Section title="Education" link="/education">
      <Subsection title="Oregon State University" aside="Corvallis, OR">
        <p>Bachelor of Science in Physics, awarded June 2020.</p>
      </Subsection>
    </Section>

    <Section title="Work Experience" link="/work">
      <Work
        title="Lead Student IT Technician"
        company="Oregon State University"
        start="Nov 2016"
        end="July 2020"
      />

      <Work
        title="Undergraduate Student Researcher"
        company="Oregon State University"
        start="Jun 2018"
        end="Sep 2018"
      />

      <Work
        title="Stylist"
        company="Levi Strauss & Co."
        start="Nov 2014"
        end="Jun 2020"
      />
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
