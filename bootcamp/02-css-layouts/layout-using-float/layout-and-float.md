# Layout and Float

## Original Intention

```css
/* Make surrounding text wrap around the image box */
.image-wrapper {
  float: right;
}
```

## Stacking Order

Float introduces stacking context.

## Clear Fix

Parent element will collapse(-> height:0 ;) if all of its children are floated and taken out of document flow.

Use the following to fix this problem:

```css
.clearfix:after {
  visibility: hidden;
  display: block;
  content: ' ';
  clear: both;
  height: 0;
}
```

## Normalize.css

- [download](https://necolas.github.io/normalize.css/8.0.1/normalize.css)

> We won't be using it in all of our examples in class, but all of your projects should include it.
