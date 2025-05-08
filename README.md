# [mdexec][repo]

Run bash scripts inside markdown files!

## Why

Sometimes documentation also offers a command to execute.

Would be nice exec such scripts from terminal.

Some IDE's alr4ady offers to execute scripts.

## How

Add some script blocks:

```bash
# Obi-Wan jumps
echo "Hello there!"
```

```bash
# Grievous salutes
echo "General Kenobi!"
```

Then `mdexec` will present them:

    ## How
    [0]:
    # Obi-Wan jumps
    echo "Hello there!"
    [1]:
    # Grievous salutes
    echo "General Kenobi!"
  
### What about other scripts

```bash
echo "for now,"
echo "only bash is supported"
```

[repo]: https://github.com/sombriks/mdexec
