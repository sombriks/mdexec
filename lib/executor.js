import { spawn } from "child_process"

/**
 * execute the parsed bash script selected in options in the cwd directory
 *
 * @param options parameters received from command line
 * @param parsed content parsed from markdown file
 * @param cwd directory to run the script
 */
export function runBashScript(options, parsed, cwd) {
  const { allScripts } = parsed
  console.log("\nExecuting #%s:\n", options.script)
  const src = allScripts[options.script]
  if (!src || !src.length) throw new Error("invalid script")
  const cmd = spawn("sh", ["-c", src.join("\n")], { cwd })
  cmd.stdout.on("data", data => console.log(`${data}`))
  cmd.stderr.on("data", data => console.log(`${data}`))
  process.stdin.pipe(cmd.stdin)
  cmd.on("close", status => console.log("exit with status %s", status))
}
