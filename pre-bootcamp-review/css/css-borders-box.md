# CSS borders, border-radius & box-shadow

## Borders
CSS border properties define the width, color and style of an element's border. These are `border-width`, `border-color` and `border-style`. 

```css
.box {
    border-width: 5px;
    border-color: gold;
    border-style: solid;
}
```

<img src="https://hychalknotes.s3.amazonaws.com/css-border.png" alt="box with gold border">

* `border-width` property sets the width (thickness) of the border.
* `border-color` property sets the color of the border. 
* `border-style` property allows you to set various styles of borders. Have a look at [css-borders.html](https://hychalknotes.s3.amazonaws.com/css-borders.html) to explore some border styles that are available in CSS. 

### Border shorthand

`border: <border-width> <border-style> <border-colour>;`

As developers we often use the common `border` shorthand to shorten the lines of code we write and for convenience. 

The previous code shown can be simply written as: 

```css
.box {
    border: 5px solid gold; 
}
```

### Targeting individual sides

`border-[side]: <border-width> <border-style> <border-colour>;`

Sometimes we don't want to set border all around our element. In that case we can target a specific side by appending `-top`, `-right`, `-bottom`, `-left` to the `border` property.

For example, if we just wanted to set a border to the bottom of the element, this will be written as:

```css
.box {
    border-bottom: 5px solid gold;
}
```
<img src="https://hychalknotes.s3.amazonaws.com/css-border-bottom.png" alt="box with gold border only at the bottom">

## The `border-radius`property

`border-radius: <value in pixel or percentage>;`

Everything in HTML is a rectangle and has 90 degrees corners. However, a design may call for softer edges. This is where the `border-radius` property comes in handy, you can round the corners of an element while the element's 'footprint' still takes remains a rectangle. This means that while the element may appear smaller with a border-radius applied, that's just an illusion.

Open up <a href="https://hychalknotes.s3.amazonaws.com/css-border-radius.html" class="exercise" download>css-border-radius.html</a> in the browser and editor and we can take a look at how it works.

The below is an element with the class of "container1" with a border-radius of 5px applied.

```css
.container1 {
    background: #F08080;
    border-radius: 5px;
}
```

<img src="https://hychalknotes.s3.amazonaws.com/border-radius.png" alt="pink box with 5px border radius" width="300">

### Specifying corners

Instead of supplying one value to the `border-radius` property, we can also supply four values, each targeting one corner of the element in the order of top, right, bottom, left (TRBL). 

```css
.container3 {
    background: #FFBA08;
    border-radius: 5px 10px 100px 1px;
}
```

<img src="https://hychalknotes.s3.amazonaws.com/border-radius-trbl.png" alt="yellow box with different border radius in each cornder" width="300">

### Making a circle

Providing a `50%` value to the `border-radius` will make a perfect circle. You can also use this on an `<img>` element!

```css
img.cat {
    border-radius: 50%;
}
```

<img src="https://hychalknotes.s3.amazonaws.com/border-radius-cat.png" alt="cat in circle" width="300">

## The `box-shadow` property

The `box-shadow` property allows us to add stylistic shadow around element. 

The basic syntax looks like this:

`box-shadow: <offset-x> <offset-y> <blur-radius> <spread-radius> <color>;`


* `<offset-x>`: The horizontal offset of the shadow, a positive value means the shadow will be on the right of the element, a negative offset will put the shadow on the left of the element.
* `<offset-y>`: The vertical offset of the shadow, a negative value means the `box-shadow` will be above the element, a positive one means the shadow will be below the element.
* `<blur-radius>`(optional): If set to 0 the shadow will be sharp, the higher the number, the more blurred it will be.
* `<spread-radius>`(optional): Positive values increase the size of the shadow, negative values decrease the size. Default is 0 (the shadow is same size as blur).
* `<color>`: A color value the represents the shadow. 

```css
.box1 {
    box-shadow: 12px 12px 3px 2px rgba(106, 90, 205, .5);
}
```
<img src="https://hychalknotes.s3.amazonaws.com/box-shadow.png" alt="box with purple box shadow">

Download [css-box-shadow.html](https://hychalknotes.s3.amazonaws.com/css-box-shadow.html) to explore more `box-shadow` options. 