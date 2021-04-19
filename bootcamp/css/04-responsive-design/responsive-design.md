# Responsive Design

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/dc980441fd6e0f2437d7934b79fdb5e9a3d4f4e8/css/responsive-design.md)

## Media Queries

### prefers-color-scheme

detects user's os-level preference for dark/light mode.

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

## Mobile First Design

- Change `max-width` to `min-width`
- More people are accessing internet on their mobile device
- Focus on content first
- Extend the style to accommodate larger screen

## Media query best practices

### Avoid height media queries

- heights in browsers are unpredictable than widths.
- Mobile browser has a browser bar at the top and a context menu at the bottom of the screen.
- The page could be seen from an in-app browser (e.g. Facebook or Twitter)
- Different mobile browser takes up different vertical height.

### Set breakpoints based on page

We will create breakpoints based on the design and content.

- Creating breakpoints based on devices is not a good idea since the number of devices is constantly growing.

```css
/* Portrait tablet and small desktops */
@media (max-width: 940px) {
}

/* Landscape phone to portrait tablet */
@media (max-width: 768px) {
}

/* Landscape phones and down */
@media (max-width: 480px) {
}
```

### Use wrappers (container)

Use wrapper to contain elements within certain range.

```css
.wrapper {
  max-width: 960px;
  width: 70%;
  margin: 0 auto;
}
```

### Use image container

Use `max-width: 100%` on image inside the container to prevent images from being too big on small screen.
