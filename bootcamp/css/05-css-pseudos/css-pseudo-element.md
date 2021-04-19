# CSS Pseudo Element

[Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/pseudo-elements.md)

## Accessibility Concern

Elements inserted with pseudo element are "sometimes" supported by screen readers.  
If you need them to be read by all users, put them in the html!.

## ::before + ::after

- are inserted as `inline` elements.
- `inline` elements, when positioned `absolute`, can have dimension when width & height are specified. (but it's not that their display property is changed to `inline-block`)
- cannot be used with self-closing element (ie. img, input, ...)
