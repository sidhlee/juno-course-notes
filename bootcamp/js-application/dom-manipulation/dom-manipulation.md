# Dom Manipulation

## Tips

### Wrap element inside an object to console.log DOM properties

```js
const introHeading = document.querySelector('h2');
console.log({ introHeading });
```

### Things I learned

### NodeList is stale

Unlike `HTMLCollection`, `NodeList` is not updated live. It is a snapshot of DOM from the time it's returned.

```js
document.getElementsByClassName('item'); // returns HTMLCollection
document.querySelectorAll('item'); // returns NodeList
```

### Use `parentElement` to traverse up

### Dom Properties

- `nextElementSibling`
