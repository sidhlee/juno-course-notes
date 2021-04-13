# FlexBox

## Browser Support

- Major browsers adapted flexbox around 10 years ago.
- Almost 99% of global usage (caniuse.com)

## Advantages of Flexbox (over float)

- No need to specify item/grid width
- Only need to apply `display: flex;` to container
  - instead of applying `float: left;` to all items
- Positioning content within container becomes very easy
  - no need for `position:absolute;`
- Items will dynamically align/justify based on the container dimension

## Limitations of Flexbox (compared to Grid)

- You can only use one direction(axis) per container
  - resulting in many nested flex-boxes
  - or have to use `position:absolute;`
- Need to position many items separately within the containers?
  - Use Grid

## FlexBox Use Cases

- Laying out a list of items
- Need to stretch in/out items based on container size
- Need to position a group of similar items together

## `space-evenly`

- only supported in firefox
- keeps the gutter width and padding-x the same

## Consideration for Accessibility

- Changing direction with flex rules can result in the discrepancy between the (text)content and the presentation.
  - `flex:direction: row-reverse;`
  - `order`
- Non-text contents are less affected because they are mostly for presentational purposes.

## Flex Grow

By default, flex-item will NOT stretch out over its set width|height (depending on direction.)

- Flex items will have width(height): `auto`depending on the flex-direction.
- Use `flex-grow: 1` to stretch out all available space within flex-container.

## Flex Shrink

By default, flex-items will shrink to fit their container.

- Multiple flex-items with `height:100%` will still fit inside the flex-container with fixed height.
- If you need to avoid shrinking, add `flex-shrink: 0;` to the flex item.

## Read

- [The Difference Between Width and Flex Basis](https://mastery.games/post/the-difference-between-width-and-flex-basis/)
- [CSS-Tracks: Flex grow is weird](https://css-tricks.com/flex-grow-is-weird/)
