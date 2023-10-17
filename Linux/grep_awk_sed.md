# Three VERY useful command-line utilities

## grep(global regular expression print)
grep will search input files for a specific string and print the lines that match it.

> grep light *
search for 'light' in the whole folder
- c: count

### AND

> grep 'director' emp.lst | grep 'sales'

search for the element with both 'director' and 'sales'

### OR
-e: pattern, can be used to specify multiple search patterns (OR)

> grep -e woodhouse -e woodcock emp.lst

> grep "wood\(house\|cock\)" emp.lst

> grep -E "wood(house|cock)" emp.lst

> grep "wilco[cx]k*s*" emp.lst
question: how to rewrite this by using **sed**

### not
-v: print the negative result

> grep -v "boo" a_file
print the lines without boo

### number list
-n: show number of line

> grep -n "boo" a_file

-c: **only** the number of matching lines

### case
-i: ignore case

> grep -i "BOO" a_file

### exact match
-x: exact same as the searching item, not contains

> grep -x "boo" a_file
only if this line is boo

### special characters
'\$': searching the lines containing '$'


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

### awk -f
if the awk file has #!/usr/bin/awk -f, there's no need to type awk -f
instead,

> ./data/awkScripts/demoE3.awk data/emp.lst

>  printf ("%-15s %-10s %'10d -- Bonus: $%'10.2f \n", $2 , $4, $6 , $6 * .2)

### format
%'10d:    100,000

## sed(stream editor)

### basics
#### find and replace
- **Default Output: Terminal**

> sed 's/input/output/' my_file

- **Edit the original file**
-i: the replacements will be stored in file

> sed -i 's/input/output/' my_file

- **Store in new file**

> sed 's/input/output/' my_file > new_file

#### print specific lines
-n
  + '1p' print line 1
  + '1,3p' print line 1 to 3
  + '1p;3;' print line 1, line 3

> sed -n '3,5p' file

#### delete specific lines and print
similiar to -n, i.e. delete line 1 to line 3

> sed '1,3d' ip.txt

#### delete empty lines

> sed '/^$/d' intro

#### replace characters

> sed 'y/abcd/ABCD' txt
- Convert a,b,c,d to A,B,C,D
- Must be the same length

### Advanced
#### special characters
when we need to use characters to do specific tasks, add '\' in front of it

> sed 's/\([uU]nix\)/\1(TM)/g' intro

in this case, we are searching for unix or Unix, so it can be denoted by ([uU]nix). However, if we use ([uU]nix) directly, then this command line will search for '([uU]nix)'. So that we add \ to ignore the character;
- \1 is the reference of the pattern founded

#### isDigit
every line that starts with a number in your file and surround that number by parentheses

> sed 's/[0-9]*/(&)/' my_file

#### others

> sed 's/they/$1000/; s/[[:digit:]]/5/' dukeofyork.txt

> sed  "{s/^[[:digit:]]\{3\}/(&)/g} ; {s/)[[:digit:]]\{3\}/&-/g}"  phones2 | sed 's/\(.*)\)\(.*-\)\(.*$\)/Area code: \1 Second: \2 Third: \3/' 
- sed "{s/^[[:digit:]]\{3\}/(&)/g} ; {s/)[[:digit:]]\{3\}/&-/g}"  phones2 
- + from phones2
- + search 3 digits from the beginning and change to (***)
- + search ')' and the following 3 digits, add '-' behind
- sed 's/\(.*)\)\(.*-\)\(.*$\)/Area code: \1 Second: \2 Third: \3/' 
- + search ')'; '-' and the rest part
- + for each part, add the hints

### .*
zero or more character