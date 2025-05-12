import test from "ava"
import { listScripts } from "../lib/listing.js"

test("should print", t => {
  t.notThrows(() => {
    listScripts("README.md", {
      parsedScripts: {
        "#Title": [["echo 'testing...'"]]
      }
    })
    t.pass()
  })
})
