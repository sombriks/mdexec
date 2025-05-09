/**
 * list scripts pared from markdown content
 *
 * @param file markdown file name
 * @param parsed
 * @param parsed.parsedScripts objects with titles as keys and list of scripts
 * as values
 */
export function listScripts(file, parsed) {
  const {parsedScripts} = parsed
  let n = 0
  console.log("%s:", file)
  for (const title in parsedScripts) {
    console.log("\n%s", title)
    for (let i = 0; i < parsedScripts[title].length; i++) {
      console.log("[%s]:", n)
      const script = parsedScripts[title][i].join("\n")
      console.log(script)
      n += 1
    }
  }
}
