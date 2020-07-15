import React from "react"

import Layout from "../components/layout"
import { Section } from "../components/section"
import HotTakes from "../components/hot"

var ht = {}
ht["Editor"] = "Vim"
ht["GUI Editor"] = "VS Code *"
ht["Operating System"] = "MacOS Mojave or earlier"
ht["Operating System (no, really)"] = "Manjaro Linux"
ht["Phone"] = "iPhone (sorry)"
ht["VCS"] = "Git"
ht["Programming Language"] = "C"
ht["Shell Language"] = "Zsh **"

export default () => (
  <Layout>
    <Section title="Hot Takes">
      <HotTakes table={ht} />
    </Section>
  </Layout>
)
