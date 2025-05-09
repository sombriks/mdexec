import test from "ava"
import {runBashScript} from "../lib/executor.js"

test('should execute', t => {
  t.notThrows(() => runBashScript({script: 0}, {
    allScripts:[["echo hello world!"]]
  }, "."))
})
