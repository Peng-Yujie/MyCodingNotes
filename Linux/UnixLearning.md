# Command Lines

## grep_awk_sed
[VERY useful](./grep_awk_sed.md)

## Create directory and file
- directory: mkdir
- file: touch

> touch foo{1,2,3} means touch foo1 foo2 foo3
> touch {foo bar}/{a...j}

## Edit file
```Linux
vim file.extension
```

## Execute
if the file doesn't have execute permission, we can add it using chmod
```Linux
chmod +x filename
```

## Read file

### cat
- cat: read the whole file

### head and tail
- head -5: read the first 5 lines
- tail -5: read the last 5 lines

### diff
show the difference between

### wc
- wc -l: count the number of lines
- wc -w: count the number of words
- wc -c: count the number of characters

### sort
- sort -n: sort by number
- sort -r: reverse

### less and more
view the content

### nl
number lines

## Conditions

### $ 
- $0: the whole line
- $?: exit status
- + 0:exist
- + 1:no

### if-else
- false || echo "oops fail"
- true && echo "Display this string"

### variable
- $(pwd)
- <(ls)

## Help
### man
manuel

## tldr
tool directory

## cut