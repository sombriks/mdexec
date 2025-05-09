import test from "ava"
import { runBashScript } from "../lib/executor.js"

test.skip("should execute", t => {
  t.notThrows(() => runBashScript({ script: 0 }, {
    allScripts: [["echo hello world!"]]
  }, "."))
  t.pass()
})

test.skip("should read stdin", t => {
  process.stdin.write("test")
  runBashScript({ script: 0 }, {
    allScripts: [["read i", "echo \"hello $i!\""]]
  }, ".")
  t.pass()
})