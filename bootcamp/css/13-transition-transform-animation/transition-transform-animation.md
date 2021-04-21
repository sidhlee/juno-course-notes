# CSS Transition Transform Animation

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/transforms-transitions-and-animations.md)

## Considerations about animation

- [Web Animation: Delightful or Distracting?](https://constructive.co/insight/web-animation-delightful-or-distracting/)
- 0.1 - 1 second
- to engage users

## Animatable CSS Properties

- `[min|max-]height`, `[min|max-]width`, `top|right|bottom|left`
- `transform`, `transform-origin` => should be preferred over using above
- `margin`, `padding`
- `boder`: `-color`. `-top|right|bottom|left[-color|-width]`
- `column-width`
- `font-size`, `letter-spacing`, `line-height`, `vertical-align`
- [`font-stretch`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch)
- `box-shadow`, `text-shadow`
- `filter`
- `backdrop-filter`
- `background[-color|-position|-size`, `object-position`
- `clip` and `clip-path`
- `flex-basis`
- `gap`
- `opacity`
- [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- [`perspective-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)
- `z-index`

## Transition-timing-function

- `ease` the element will change slowly both at the beginning and end, and speed up in the middle. This is the default value
- `ease-out` the transition will move quickly at the beginning, and then slow down as it finishes
- `ease-in` the transition will move slow at the beginning and then speed up as it finishes
- `ease-in-out` the transition will move slow at the beginning, speed up in the middle, and slow down as it finishes. It is similar to the ease function.

## Multiple Values

```css
.box {
  width: 200px;
  height: 200px;
  background: purple;
  transition: background 1s, height 10s, width 0.5s;
}

.box:hover {
  width: 500px;
  height: 500px;
  background: yellow;
}
```

## Multiple Transforms

```css
.box {
  width: 200px;
  height: 200px;
  background: orangered;
  transform: rotate(60deg) scaleX(2) scaleY(1.4);
  transition: all 0.8s;
}

.box:hover {
  transform: rotate(180deg) scaleX(2) scaleY(1.4);
}
```

## Better Accessibility

- Use `prefers-reduced-motion` for users who don't want animations.

## Gotchas

- `transform: scale()` uses value between [0, 1]
