import test from "ava"
import {parseContent} from "../lib/parser.js"

test('should parse content', t => {
  const result = parseContent([
    "#Example",
    "",
    "```bash",
    "echo 'sample'",
    "```",
  ])
  t.deepEqual(result.parsedScripts, {'#Example': [["echo 'sample'"]]})
})

test('should fail - invalid content', t => {
  t.throws(() => parseContent([
    "#Example",
    "",
    "```bash",
  ]))
})
