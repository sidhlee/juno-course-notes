# Working with API

## Path parameter vs query params

In the past, path was only way to access specific resource, but

> Back in the day, the path was very tied to a specific file that handled the request on the server, so the only way to provide options was via query parameters. But then they made programs that could also parse the path requested and dynamically return different results And lots of folks thought queries like `/api/current/system/latest` Looked better than `/api/current?system=latest` And so they started adopting path parameters. But often what you’re requesting doesn’t fit nicely into a path, and then the right tool to use is query params

## CORS error. Why?

### Typo in url

Typo in API url results in hitting different domain all together. If that domain has no API then it would not have proper CORS header which leads to CORS Error in the network tab.

## Why we have to call `response.json()` on fetch return?

> why are we returning it and not just using it right away in our first callback? For low-level HTTP-y “reasons”… the json() method is ALSO an asynchronous process, much like fetch() . So you have to handle it with a .then() like we did with fetch. It’s all a little unusual, “because asynchronous”. We’ll be getting into asynchronous code and thens and another syntax for making this all seem look a little simpler and cleaner in a future lesson! For now… fetch…then()…then() _- Brent, 2021_

## URL + URLSearchParams + fetch

You can create URL object with URL

```js
const url = new URL('https://api.datamuse.com/words');
```

url looks like this:

```
hash: ""
host: "api.datamuse.com"
hostname: "api.datamuse.com"
href: "https://api.datamuse.com/words?ml=cheese"
origin: "https://api.datamuse.com"
password: ""
pathname: "/words"
port: ""
protocol: "https:"
search: ""
searchParams: URLSearchParams {}
username: ""
```

Then you can add search params to the url obj by:

```js
// you can pass key:value obj to create url-encoded search param
const searchParams = {
  ml: 'cheese',
};
url.search = new URLSearchParams(searchParams);
```

The nicest thing about using `URL` + `URLSearchParams` is that you can pass that url object directly to `fetch()`

```js
fetch(url).then((response) => response.json()).then((data) => { ...})
```
