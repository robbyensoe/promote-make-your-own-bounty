# Make Your Own Bounty — X promotion entry

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/robbyensoe/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/robbyensoe/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for make.fun's **post-x-promote-make-your-own-bounty-01** bounty:
promote make.fun's make-your-own-bounty post on X.

The entry is one post on X that quotes
[make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
or links to it, from a public account, with a photo of its own attached. Its
text carries make.fun, the line "Make your own bounty on @makefunai:
https://make.fun/sponsor/new", and the account's play code for this bounty.
The house scores the post by its replies plus its reposts plus its quotes,
one point each; views and likes move nothing.

`POST.json` at the root names the post. `main.ts` (Node 22, standard library
only) validates that file and copies it to the output directory, where the
house reads the address and scores the post itself.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
