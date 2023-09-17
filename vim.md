## Vim
### navigation
- k: up
- j: down
- h: left
- l: right
- w/b/e: move by words
- 0/^: beginning of the line
- $: end of the line
- ctrl+D: scroll down
- ctrl+U: scroll up
- File: gg (beginning of file), G (end of file)
- Line numbers: :{number}<CR> or {number}G (line {number})
- Misc: % (corresponding item)
- Find: f{character}, t{character}, F{character}, T{character}
  - find/to forward/backward {character} on the current line
  - , / ; for navigating matches
- Search: /{regex}, n / N for navigating matches

### edit
edit
- i: inser
- a: after
- o: open a new line below
- O: open a new line above
- d: delete
  - d + w: delete after
  - d + b: delete before
  - dd: delete the whole line
  - di(: delete inside ()
  - da(: delete all, including ()
- u: undo
- c: change
  - cc: edit line
  - ci[: change inside of []
  - c2w: change two words

### copy and paste
- y: copy
  - yy: copy the current line
  - yw: copy word  
- p: paste

### mode
- normal
- insert
- replace
- visual
- command-line

### command
- :q quit
- :wq save and quit
- :help [:command] call for help

