# CSS Grid

- Presentational class == "utility" class
- Non-Presentational(Semantic) classes - based on the content(header)

## % values in `grid-template`

It will NOT take into account `gap` and margins between columns

```css
.container {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 150px 300px;
  /* This will cause horizontal scroll! */
  gap: 40px;
}
```

## Mixing up units in `grid-template`

Avoid if you can for better readability.

## Implicit grid with `grid-auto`

Any grid that is not set explicitly in `grid-tempalte` will be implicit.

- If you defined 3 columns then add 2 more columns, the added columns will take content width
- If you defined 3 rows then add 2 more rows, the added rows will take content height

### `grid-auto-flow`

- `row`(default) - add new rows
- `column` - add new columns
- `dense` - will switch item orders to fill up any space (accessibility alarm!)

### `grid-auto-rows` & `grid-row-columns`

Specify the size of any auto-generated(implicit) grid tracks

```css
.grid {
  grid-auto-columns: minmax(200px, auto);
  grid-auto-rows: minmax(60px, auto);
}
```

## Repeat function

`

`

## Gotchas

- Negative grid numbers only apply to the explicitly defined rows/columns.
  - `grid-row: 1 / -1;` will not include implicitly created rows/columns.

## Accessibility Consideration with Grid

- `grid-auto-flow: dense;` can pose an accessibility issue making it hard to predict layout in different viewport.
