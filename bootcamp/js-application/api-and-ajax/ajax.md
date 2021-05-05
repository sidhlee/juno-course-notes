# AJAX

## Understanding AJAX errors

- [Course note](https://github.com/HackerYou/bootcamp-notes/blob/master/applied-javascript/understanding-ajax-errors.md)

## Why prefer appending elements vs assigning string to innerHTML

- `append`ing element is much faster than `innerHTML`
- All event listeners attached to children don't get cleared. This causes memory leak!!!
- Use `Element.replaceChildren()` to clear children

## Promise.all

```js
const endpoints = [...];
const apiPromiseResponses = endpoints.map((individualUrl) => {
  return fetch(individualUrl)
    .then((response) => response.json())
})

const valuesPromise = Promise.all(apiPromiseResponses);

valuesPromise.then(values => {
  // do something with values...
})
```
