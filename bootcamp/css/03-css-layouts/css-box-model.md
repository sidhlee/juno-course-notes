# CSS Box Model

- [Bootcamp-note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/css-box-model.md)
- Every HTML element is a rectangular box.
- CSS Box Model describes the properties of these boxes.
- Content - Padding - Border - Margin (inside -> outside)

## Remember

- If a box has a fixed-width + height, oversized content will overflow
- Child element's `height:100%` will have no effect if the height of the parent is not set.
- margin & padding - always start with shorthand, then set individual value as needed.
- Hover over CSS selectors to find specificity
- For technical challenges, PAY ATTENTION TO THE DETAILS OF THE INSTRUCTIONS.
  - You can add comments to explain your decisions.

### CSS Prefixes

```css
* {
  box-sizing: border-box;
  /* Chrome, Safari */
  -webkit-box-sizing: border-box;
  /* Firefox */
  -moz-box-sizing: border-box;
}
```
