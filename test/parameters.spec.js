import test from "ava"
import {getParameters} from "../lib/parameters.js"

test('should get parameters', t => {
  const result = getParameters()
  t.is(".", result.cwd)
  t.is("README.md", result.file)
  t.true(result.options.list)
})
