# Unix Tools

## grep_awk_sed
[VERY useful](./grep_awk_sed.md)

## $
- $0: the name of the script
- $?: exit status
- + 0:exist
- + 1:no

## edit file

> vim file.extension

## conditions
- false || echo "oops fail"
- true && echo "Display this string"

> like JavaScript

## variable
- $(pwd)
- <(ls)

## execute
if the file doesn't have execute permission, we can add it using chmod

> chmod +x filename


## foobar

> added by example.sh

## {}
can be used to create multiple files



> touch foo{1,2,3} means touch foo1 foo2 foo3
> touch {foo bar}/{a...j}

## diff
show the difference between

## man
manuel

## tldr
tool directory

## less and more
view the content


## sort

## cut

## sub
find the first one then replace
gsub: g for global, replace all

> gsub(//,"",$4) # // for searching item, "" for replacement, $4 for resource

> echo "apple,banana,apple,orange" | awk '{ sub("apple","orange"); print}'

> echo "apple,banana,apple,orange" | awk '{ gsub("apple","orange"); print}'

## nl
number lines