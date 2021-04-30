# JS Spread, Rest and Destructuring

## You can spread emoji

Some emoji' consists of multiple emoji and they are iterable!

```js
console.log(..."👨‍👩‍👧‍👦'"); // 👨 ‍ 👩 ‍ 👧 ‍ 👦

for (const emoji of "👨‍👩‍👧‍👦'") {
  console.log(emoji);
}
// 👨 ‍
//
// 👩
// ‍
// 👧 ‍
//
// 👦
```
