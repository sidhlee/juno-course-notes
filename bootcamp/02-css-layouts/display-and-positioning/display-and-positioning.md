# Display and Positioning

## Display

- All width and height set to inline elements will be ignored.
- Give `display: inline-block;` to add width | height;

## `<img>` is "like" inline-block

- They are `inline` elements.
- But they behave like inline-block element - can have width and height.
- This behavior was there even before `inline-block`
- This is why you can use `text-align` to center images (You can only apply them to inline/inline-block elements)
- Browser will render all white space between (including new line) inline-block elements
  - this will cause elements to wrap even though they have the "correct" width.
- This is exactly why img elements are left with white space on the bottom.
  - `display: block;` to fix this

## `display: none` vs `visibility:hidden`

- `display: none` will remove the element.
- `visibility: hidden` will hide elements, but they will still take up space.
- Both will not be read by screen reader.

## sr-only

When you need to hide something but need them to be read by a screen reader.
("visible" by screen-reader only)

```css
.sr-only:not(:focus):not(:active) {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
```

## Relative vs Absolute

- Use relative when you don't want other element go underneath.
- Use absolute when you don't want the element to affect other elements flow
