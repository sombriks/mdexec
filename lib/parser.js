/**
 * Organizes markdown contnt in a logic way
 *
 * @param {Array<String>} content list of lines read from markdown file
 * @return {{
 *     scriptOpen: false,
 *     currentTitle: "",
 *     currentScripts: [],
 *     parsedScripts: {},
 *     allScripts: []
 *   }} information properly parsed from content
 */
export function parseContent(content) {
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
  }).filter(line => "" !== line)

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
      acc.allScripts.push(acc.currentScripts)
      acc.currentScripts = []
      acc.scriptOpen = false
    } else {
      // add script
      acc.currentScripts.push(line)
    }
    return acc
  }, {
    scriptOpen: false,
    currentTitle: "",
    currentScripts: [],
    parsedScripts: {},
    allScripts: []
  })

  return parsed
}
