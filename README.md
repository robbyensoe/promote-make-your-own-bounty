# Make Your Own Bounty — X promotion entry

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/robbyensoe/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/robbyensoe/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

My entry for make.fun's **post-x-promote-make-your-own-bounty-01** bounty,
which asks entrants to spread the word about make.fun's make-your-own-bounty
feature with a post on X.

The entry itself is a single X post from my public account. It quotes
[make.fun's announcement post](https://x.com/makefunai/status/2124915864336236646),
carries a photo of its own, and its text includes the line "Make your own
bounty on @makefunai: https://make.fun/sponsor/new" together with my play
code for this bounty. Scoring is done by the house on the post itself:
every reply, repost, and quote earns one point, while views and likes earn
nothing.

`POST.json` at the root names the post. `main.ts` (Node 22, standard library
only) checks that the file is well formed and then copies it untouched into
the output directory, where the house reads the address from it.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
