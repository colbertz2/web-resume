import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import HotTakes from "../components/hot"

var ht = {}
ht["Editor"] = "Vim"
ht["GUI Editor"] = "VS Code *"
ht["Operating System"] = "Manjaro Linux"
// ht["Operating System (no, really)"] = "Manjaro Linux"
ht["Phone"] = "iPhone (sorry, not sorry)"
ht["VCS"] = "Git"
ht["Programming Language"] = "C (and Python too!)"
ht["Shell Language"] = "Zsh **"

export default () => (
  <Layout>
    <Section title="Hot Takes">
      <HotTakes table={ht} />
      <p>
        <em>
          * Open-source build, unless I need to use the Remote-SSH extension.
          For some reason I can only get it to work with the Microsoft build.
        </em>
      </p>
      <p>
        <em>
          ** With lovely, lovely configuration by{" "}
          <a href="https://ohmyz.sh/">Oh My Zsh</a>!
        </em>
      </p>
    </Section>
  </Layout>
)
