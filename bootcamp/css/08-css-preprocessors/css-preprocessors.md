# CSS Preprocessors

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/preprocessors-scss.md)

## `@import` vs `@use`

> only Dart Sass currently supports @use. Users of other implementations must use the @import rule instead.

`_setup.scss`

```scss
// setup rules
...
```

`main.scss`

```scss
@import './setup'; // only Dart Sass currently support @use
```

## Import order matters

If one of your partial A depend on the another partial B, A should be imported into the main file **after** B.
