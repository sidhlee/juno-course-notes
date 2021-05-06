# Scope and Execution Context

- [Course note](https://github.com/HackerYou/bootcamp-notes/blob/master/applied-javascript/advanced-js-lexical-scope-and-execution-context.md)

## Execution Context

Execution context contains information about a function

- variables defined in that function scope
- functions defined in that function scope
- other available scope - parent scope
- value of `this`

When the JavaScript engine runs on page load, it:

- creates _global_ object
  - `window` inside browsers
  - `global` in node
- "global" execution context is created

## Lexical Scope

- Scope is determined by where the function is declared in codebase.

## this

The value of `this` inside regular function (function declaration & expression ) is determined at runtime by HOW the function is called.

Inside a browser, `this` points to the `window` object except when the function is called under a namespace.

- `this` inside that function will be the "owner" of the function (object that comes before .method).
- If the function is called without namespace, it will default to `window` object.

```js
const logThisWithArrow = () => {
  console.log(this);
};

const app = {
  name: 'app',
  get this() {
    return this;
  },
  doSomething: function () {
    console.log(this);
  },
  doSomethingWithArrow: () => {
    console.log(this);
  },
};

const appTwo = {
  name: 'app2',
  doSomething: app.doSomething,
  logThis: logThis,
  logThisInsideFn: function () {
    logThis();
  },
  logThisInsideArrowFn: () => {
    logThis();
  },
};

function logThis() {
  console.log(this);
}

app.doSomething(); // { name: 'app', ...}
appTwo.doSomething(); // { name: 'app2', ...}
app.doSomethingWithArrow(); // window
appTwo.logThis(); // { name: 'app2', ...}
appTwo.logThisInsideFn(); // window
appTwo.logThisInsideArrowFn(); // window
```

### This inside Arrow Function

Arrow function always inherit `this` from its parent scope when the arrow function is defined.

```js
//  This inside artistAndTitle will inherit this here.
console.log(this);

const song = {
  artist: 'Ella Fitzgerald',
  title: 'How High The Moon',
  artistAndTitle: () => {
    console.log(`${this.artist} - ${this.title}`)
  }
}

const.artistAndTitle() // undefined - undefined
```
