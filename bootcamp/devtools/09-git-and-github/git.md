# Git

## Getting Started

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/git-and-command-line/version-control-with-git-and-github%20.md)

### Show .git (and other hidden files)

- `cmd + shifr + .` in MacOS
- explorer > View > Toggle on the `hidden` checkbox

### Terms

- Clone a repo - create a local copy of an existing repository.
- Fork - clone a public repo and make contributions to them.

## SC Golden Rule: Commit Early & Commit Often

and don't forget to do that.

## Config

### Check Current Configuration

```bash
$ git config --get user.email
sidhlee@gmail.com
$ git config --get user.name
Hayoun Lee
```

### Update config

```bash
# Update user name
$ git config --global user.name "Sid Hayoun Lee"
$ git config --get user.name
Sid Hayoun Lee
```

### Use `git add -A`

Because `git add .` DOES NOT update the deleted files and folders.

## Git Branching

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/git-and-command-line/git-branching.md)

## GitHup Pages

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/git-and-command-line/github-pages.md)

## Collaboration

### Pair Program GitHub Workflow

(student 1 = s1, student 2 = s2)

1. s1 pulls from main
2. s1 creates a branch
3. s1 and s2 work on it for 25 min, with s1 as the driver
4. s1 adds, commits, pushes and creates a PR
   s2 approves it
   s1 merges it
   s2 pulls from main
   repeat with roles reversed

### Team Work

Never ever push directly into main branch. Always make PR for review.

- [Git Collaboration](https://github.com/HackerYou/bootcamp-notes/blob/master/git-and-command-line/git-collaboration.md#pull-requests)
