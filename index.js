import { listScripts } from "./lib/listing.js"
import { getParameters } from "./lib/parameters.js"
import { parseContent } from "./lib/parser.js"
import { runBashScript } from "./lib/executor.js"

const { options, cwd, file, content } = getParameters()
const parsed = parseContent(content)
if (options.help) {
  console.log(`
  Usage: mdexec [options] <number>

  Options:
    -h, --help       Show this help message
    -d, --directory  Set the working directory for the script
    -f, --file       Specify the markdown file to execute
    -l, --list       List all scripts in the markdown file
    [-s, --script]   Run a specific script by number
  `)
  process.exit(0)
} else if (options.list) listScripts(file, parsed)
if (options.script !== undefined) runBashScript(options, parsed, cwd)
