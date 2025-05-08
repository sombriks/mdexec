# [mdexec][repo]

[![npm](https://badgen.net/npm/v/mdexec?color=blue&icon=npm)][npm]

```bash
echo "Run bash scripts inside markdown files!"
```

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
[intellij]: https://www.jetbrains.com/help/idea/markdown.html#run-commands
[vscode]: https://marketplace.visualstudio.com/items/?itemName=Sycl.markdown-command-runner
[jupyter]: https://jupyter.org
