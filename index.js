import {listScripts} from "./lib/listing.js"
import {getParameters} from "./lib/parameters.js"
import {parseContent} from "./lib/parser.js"
import {runBashScript} from "./lib/executor.js"

const {options, cwd, file, content} = getParameters()
const parsed = parseContent(content)
if (options.list) listScripts(file, parsed)
if (options.script !== undefined) runBashScript(options, parsed, cwd)
