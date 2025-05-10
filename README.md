# [mdexec][repo]

[![npm](https://badgen.net/npm/v/mdexec?color=blue&icon=npm)][npm]
[![Node.js CI](https://github.com/sombriks/mdexec/actions/workflows/node.js.yml/badge.svg)][workflow]
[![MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

```bash
echo "Run bash scripts inside markdown files!"
```

## Installing

```bash
npm -g i mdexec
```

Run with `npx` if you prefer:

```bash
npx mdexec
```

## Usage

Run the first bash script contained in a `README.md` file in current directory:

```bash
mdexec 0
```

List all scripts from `README.md`:

```bash
mdexec 
# or mdexec -l
```

Pass directory where to run and markdown file name, run the 4th script:

```bash
mdexec -f steps/intro.md -d ../example -s 3
```

Run `mdexec -h` for more details.

## Why

Sometimes documentation also offers a command to execute.

Would be nice exec such scripts from terminal.

Some IDE's already offers to execute scripts.

## How

Add some script blocks in your markdown document:

```bash
# Obi-Wan jumps
echo "Hello there!"
```

```bash
# Grievous salutes
echo "General Kenobi!"
```

```bash
for i in `ls`
do
  echo $i
done
```

Then `mdexec` will present them:

    ## How
    [0]:
    # Obi-Wan jumps
    echo "Hello there!"
    [1]:
    # Grievous salutes
    echo "General Kenobi!"
  
### What about other shells

```bash
echo "for now,"
echo "only bash is supported"
```

## Further reading

- [Intellij plugin][intellij]
- (Abandoned) [VSCode plugin][vscode]
- [Jupyter notebooks][jupyter]

[repo]: https://github.com/sombriks/mdexec
[npm]: https://www.npmjs.com/package/mdexec
[workflow]: https://github.com/sombriks/mdexec/actions/workflows/node.js.yml
[intellij]: https://www.jetbrains.com/help/idea/markdown.html#run-commands
[vscode]: https://marketplace.visualstudio.com/items/?itemName=Sycl.markdown-command-runner
[jupyter]: https://jupyter.org
