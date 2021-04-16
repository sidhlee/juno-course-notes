# Best Practices

## HTML & CSS

- Clean code - human-readable & concise, DRY, structured, with clear boundaries
- Organizing projects - group files of the same type into separate folders
- Indent HTML
- Use `<ul>` for any groups of specific components - gallery item, blog posts, social icon...
- Compress/minify our files - css, images, etc...

## Page Layouts

- Use flexbox, grid, floats for:
  - dynamic content
  - container size changed by user action.
  - laying out block elements related to the structure of the page
- Use positioning for:
  - "Island" elements that doesn't affect the document flow (e.g. fixed header)
  - Orienting elements within a specific block of the page.
  - `absolute`/`fixed` position will remove `float`.
- Use margin and padding to space within and around the element.
  - Paddings can't have negative values.

## adding modifier class

Write more general rules that applied to the same component then
add separate modifier classes for variation.

```css
.container {
  border: 2px solid black;
}
.container-1 {
  border-color: ...
  border-style: ...
}
.container-2 {
  border-color: ...
}
.container-3 {
  border-color: ...
}
```

## Don't put block level element inside an inline element

```html
<a><h1>Don't Do This</h1></a>

<h1><a>Proper</a></h1>
```

## Tooltip is not read by screen readers

## `<figure>` element

Q: They do have an example where they use `<figure>` without `<figcaption>`. Does this mean it will have a better accessibility?

> Usually a `<figure>` is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.
> If the image is referenced in the main content then it’s appropriate to wrap it in a figure. Remember in textbooks “See figure 1” this is a figure being referenced in the content. If the image isn’t being directly referenced by the main flow content, then it doesn’t need a `<figure>` tag. It doesn’t automatically make images more semantic
