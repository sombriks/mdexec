import fs from "fs"
import path from "path"

// 1- find the markdown file (default is ./README.md)
const file = "README.md"
const content = fs.readFileSync(path.join(".", file), { encoding: "utf-8" }).split("\n")

// 2 - parse file (titles and block scripts)
let blockOpen = false
const parsed = content.map(line => {
  line = line.trim()
  if (line.startsWith("#"))
    return line
  else if (line.startsWith("```bash")) {
    blockOpen = true
    return line
  } else if (line.startsWith("```")) {
    blockOpen = false
    return line
  } else if (blockOpen) {
    return line
  } else return ""
}).filter(line => '' != line)
console.log(parsed)

// 
// 3- list all script blocks marked as bash
// 4 - run a given script