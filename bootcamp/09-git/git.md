# Git

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
