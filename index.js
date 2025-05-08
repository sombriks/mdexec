import fs from "fs"
import path from "path"
import { spawn } from "child_process"
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

// 3- list all script blocks marked as bash (print usage)
const { parsedScripts } = parsed
let n = 0
const scriptList = []
for (const title in parsedScripts) {
  console.log("\n%s", title)
  for (let i = 0; i < parsedScripts[title].length; i++) {
    console.log("[%s]:", n)
    const script = parsedScripts[title][i].join("\n")
    scriptList.push(script)
    console.log(script)
    n += 1
  }
}

// 4 - run a given script
if (process.argv.length > 2) {
  console.log("\nExecuting #%s:\n", process.argv[2])
  const cmd = spawn("sh", ["-c", scriptList[process.argv[2]]])
  cmd.stdout.on("data", data => console.log(`${data}`))
  cmd.stderr.on("data", data => console.log(`${data}`))
  cmd.on("close", status => console.log("exit with status %s", status))
}