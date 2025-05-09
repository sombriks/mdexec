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
    for (const script of parsedScripts[title]) {
      console.log("[%s]:", n)
      console.log(script.join("\n"))
      n += 1
    }
  }
}
