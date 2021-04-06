# CSS Box Model

- Every HTML element is a rectangular box.
- CSS Box Model describes the properties of these boxes.
- Content - Padding - Border - Margin (inside -> outside)

## Remember

- If a box has a fixed-width, oversized content will overflow
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
