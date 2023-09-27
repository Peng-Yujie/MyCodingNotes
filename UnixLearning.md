# Unix Tools

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

## sed

> sed 's/they/$1000/; s/[[:digit:]]/5/' dukeofyork.txt

> sed  "{s/^[[:digit:]]\{3\}/(&)/g} ; {s/)[[:digit:]]\{3\}/&-/g}"  phones2 | sed 's/\(.*)\)\(.*-\)\(.*$\)/Area code: \1 Second: \2 Third: \3/' 
- sed "{s/^[[:digit:]]\{3\}/(&)/g} ; {s/)[[:digit:]]\{3\}/&-/g}"  phones2 
- + from phones2
- + search 3 digits from the beginning and change to (***)
- + search ')' and the following 3 digits, add '-' behind
- sed 's/\(.*)\)\(.*-\)\(.*$\)/Area code: \1 Second: \2 Third: \3/' 
- + search ')'; '-' and the rest part
- + for each part, add the hints

> sed '1d;3;' ip.txt
- delete line 1 and line 3
- can also be written as sed '1,3d' ip.txt

> sed 'y/abcd/ABCD' txt
- Convert a,b,c,d to A,B,C,D
- Must be the same length

### .*
zero or more character

## nl
number lines

## grep
grep is looking for something

> grep light *
search for 'light' in the whole folder
- c: count

### AND

> grep 'director' emp.lst | grep 'sales'

search for the element with both 'director' and 'sales'

### OR
- e: pattern, can be used to specify multiple search patterns (OR)

> grep -e woodhouse -e woodcock emp.lst
> grep "wood\(house\|cock\)" emp.lst
> grep -E "wood(house|cock)" emp.lst

> grep "wilco[cx]k*s*" emp.lst
question: how to rewrite this by using **sed**

## sort

## cut

## awk

> awk '{print $2" "$1}' data/names.txt
to print ' ' between, we can use " ", or ','(remember if there is no " " or ',' there will not be space)

> awk '{print NF; print $0; print $NF}' data/dukeofyork.txt
print and move to next line

### NF
means number of fields

> awk '{print NF, " -> ", $0}' data/dukeofyork.txt 

> awk 'NF > 6 {print $0}' data/SomePoem.txt

- $0: represents the entire row
- $1: the first word
- $NF: represents the last word in the row

### NR
means number of rows(lines)

> awk 'NR % 3 == 0{print NR,"<->",$0}' data/dukeofyork.txt

### BEGIN END

> awk 'BEGIN {count=0}{count += NF} END{print count}' data/dukeofyork.txt 

> awk 'BEGIN {print "===start==="} NR % 3 == 0{print $0} END{print "===end==="}' data/dukeofyork.txt