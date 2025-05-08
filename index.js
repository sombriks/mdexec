import fs from "fs"
import path from "path"
import { title } from "process"

// 1- find the markdown file (default is ./README.md)
const file = "README.md"
const content = fs.readFileSync(path.join(".", file), { encoding: "utf-8" }).split("\n")

// 2 - parse file (titles and block scripts)
let blockOpen = false
const filtered = content.map(line => {
  if (line.trim().startsWith("#")) {
    return line
  } else if (line.trim().startsWith("```bash")) {
    blockOpen = true
    return line
  } else if (line.trim().startsWith("```")) {
    blockOpen = false
    return line
  } else if (blockOpen) {
    return line
  } else return ""
}).filter(line => "" != line)
const parsed = filtered.reduce((acc, line) => {
  // set title 
  if (!acc.scriptOpen && line.trim().startsWith("#")) {
    acc.currentTitle = line
  } else if (line.trim().startsWith("```bash")) {
    acc.scriptOpen = true
  } else if (line.trim().startsWith("```")) {
    if (!acc.parsedScripts[acc.currentTitle]) {
      acc.parsedScripts[acc.currentTitle] = []
    }
    acc.parsedScripts[acc.currentTitle].push(acc.currentScripts)
    acc.currentScripts = []
    acc.scriptOpen = false
  } else {
    // add script
    acc.currentScripts.push(line)
  }
  return acc
}, { scriptOpen: false, currentTitle: "", currentScripts: [], parsedScripts: {} })
console.log(parsed)
// 
// 3- list all script blocks marked as bash
// 4 - run a given script