import cmdArgs from "command-line-args"
import fs from "fs"

/**
 *
 * @returns {{options: (*|{}), cwd: (string|string), file: (*|string), content: string[]}}
 */
export function getParameters(){

  const options = cmdArgs([
    {type: Boolean, alias: "h", name: "help", defaultValue: false,},
    {type: Boolean, alias: "l", name: "list", defaultValue: false,},
    {type: String, alias: "d", name: "directory",},
    {type: String, alias: "f", name: "file",},
    {type: Number, alias: "s", name: "script", defaultOption: true,},
  ])
  if (options.script === undefined) options.list = true
  const cwd = options.directory || "."
  const file = options.file || "README.md"
  const content = fs.readFileSync(file, {encoding: "utf-8"}).split("\n")

  return {options, cwd, file, content}
}
