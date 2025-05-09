import test from "ava"
import {runBashScript} from "../lib/executor.js"

test("should execute", t => {
  t.notThrows(() => runBashScript({script: 0}, {
    allScripts:[["echo hello world!"]]
  }, "."))
})

test("should read stdin", t => {
  runBashScript({script: 0}, {
    allScripts:[["read i", "echo $i!"]]
  }, ".")
  t.pass()
})