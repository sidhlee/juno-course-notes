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
