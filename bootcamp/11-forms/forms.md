# Forms

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/forms.md)

## Five Major Form Parts

- input
  - text - email, password, dates, numbers...
  - checkboxes
  - ranges
  - radio buttons
- label
- fieldset - used to group different parts of the form
- legend - label for fieldset
- form: used to group a set of `input` and `fieldset` elements together.

## Input Types

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="color" />
<input type="file" />
<input type="file" multiple="true" />
<input type="range" min="30" max="300" step="7" />

<!-- text, but different styling -->
<input type="search" />

<!-- used to store & send metadata related to the page: location, user-agent,... -->
<input type="hidden" value="iuhf9783#$2" />

<!-- Prefer submit "Button" for better accessibility-->
<input type="submit" />
<button type="submit">Submit</button>

<!-- Resets form! -->
<button type="reset">Reset Form</button>
```

## Input Attributes

```html
<label class="sr-only" for="username">Username</label>
<input
  id="username"
  type="text"
  name="username"
  placeholder="Username"
  autocorrect="off"
  autocapitalize="off"
  required
/>
<label class="sr-only" for="password">Password (min. 6 characters)</label>
<input
  id="password"
  type="password"
  name="password"
  placeholder="UsernamePASSWORD"
  minlength="6"
/>
<label class="sr-only" for="qty">Quantity</label>
<input
  id="qty"
  type="number"
  min="1"
  max="3"
  placeholder="Quantity"
  value="1"
/>
<label class="sr-only" for="comment">Leave us any comment</label>
<textarea id="comment" autocomplete="off" autocorrect="on" autocapitalize="on" >
```

## Form

- action - address of a server side file that will handle the payloads

```html
<form
  action="sendEmail.php"
  method="POST"
  class="applicationForm"
  name="applicationForm"
>
  <!-- inputs go here -->
</form>
```

## `<output>`: The Output element

`<output>` is used to output calculation or the outcome of a user action.

- [MDN: output element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

### Accessibility Concerns

> Many browsers implement this element as an aria-live region. Assistive technology will thereby announce the results of UI interactions posted inside it without requiring that focus is switched away from the controls that produce those results.
> => Screen reader will say every intermediate results like 1, 2, 3, 4, 5, 6, 7, ..., 99

## Label + Aria-Label

If you need to hide label visually, you can add `aria-label` with the matching text from the label element.

- `<label/>` provide structurally semantic element on the page, regardless of its visibility.

## Use closing tag on `<input/>`

- Best to include `/` on all self-closing tags to pass accessibility / structural checks.

## Writing CSS for forms

We can select them based on their type:

```css
input[type='email'] {
}
```

This can be a great selector to use to reset browser defaults.

In addition, we can target trigger styling (i.e. when the user clicks or taps on an element or selects it with the keyboard's "tab" key) by using the :focus state.

```css
input:focus {
}
```

To access the styling of an active input field (i.e. a button element that is clicked by the user), use the :active state.

```css
input:active {
}
```

> **Accessibility tip**
>
> Set element focus with a border or highlight for those who rely on the keyboard navigations.

### Styling `select` elements

Often, in a design, a dropdown will need to be styled beyond the default browser styling for the `select` tag, or it will need a custom dropdown icon. The `select` element (and most other form elements) will need their default browser appearance "turned off" to make styling easier.

Remember that when you remove the default styling, you must create replacement styling for **every state** of an element. This includes `:active` and `:focus`.

```css
select {
  /* remove default select styles */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  border: 1px solid black;
  /* "down arrow" image */
  background-image: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png);
  background-repeat: no-repeat;
  /* position to the right end */
  background-position: 95% center;
}
```

With the `appearance` set to `none`, we are free to apply our own styles. The arrow icon will also be removed from the `select` element.

> If you can't change default styling of input element, try adding `appearance: none;`

To put your own custom arrow on the select element, we can get creative with a background image.

Download [this file](https://hychalknotes.s3.amazonaws.com/resetting-default-select-styles.html) to see the full code.

Styling the options list is essentially not possible at this time. If you are assigned work to customize an options list, you may need to build the list from scratch and implement all of the browser accessibility functionality yourself or reach for a library to help with this task.
