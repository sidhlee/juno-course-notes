# Regular Expression

[Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/applied-javascript/regular-expressions.md)

## Creating Regex Object

> From MDN: Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

```js
const re1 = /abc/gi;

// OR

const keywordRegex = new RegExp(searchingKeyword, 'gi'));
```

## Testing with Regex

```js
const doubleOPattern = /oo/;
console.log(doubleOPattern.test('boom'));
// true
console.log(doubleOPattern.test('dug'));
// false
```

```js
if (keywordRegex.test(article)) {
  console.log(`${searchingKeyword} found in article!`);
}
```

## Return an array of match result

If no match, `Regex.exec(string)` returns null.

```js
let re = /abc/;
re.exec("I'm learning the alphabet."); //returns null
re.exec("Now I know my abc's"); //returns "["abc"]";
```

## Find the string to replace with Regex

```js
let name = 'HackerYou';
let wrongName = name.replace('You', 'U'); // "HackerU"
let alsoWrongName = name.replace(/You/, 'U'); // also "HackerU"
```

## Use character class to match one out of many characters

```js
let website = 'hackeryou.com';
let hyPattern = /[Hh]acker[Yy]ou/;
console.log(hyPattern.exec(website));
// Array ["hackeryou"]
```

## Flags to modify expression

For global search, use `g` flag.

```js
let const = "Apples are the best fruit. You should eat an apple every day.";
console.log(statement.replace(/[Aa]pple/g, "orange"));
// "oranges are the best fruit. You should eat an orange every day."
```

For case insensitive, use `i` flag.

```js
let petOpinion = 'Cats make the best pets. Everyone should own a cat.';
console.log(petOpinion.replace(/cat/gi, 'frog'));
// "frogs make the best pets. Everyone should own a frog."
```

## Use captured string

`String.match` returns null for no match or an array if matched.

> The 0th entry will be the entire string matched by the expression, and for each () group in the expression there will be additional entries in the order they appear in the expression.

```js
let myNameIs = 'Hello, my name is Merton.';
let nameExpression = /my name is ([a-z]+)/i;
console.log(myNameIs.match(nameExpression));
// Array [ "my name is Merton", "Merton" ]
```

`String.matchAll` will include all the matched instance in the returned `Iterator` instead of returning only first match in the string.

```js
let distances = 'Distances: 100m, 50m, 10m';
let distanceExpression = / ([0-9]+)m/g; // use the `g` global flag to find all matches
let distanceMatches = distances.matchAll(distanceExpression);
for (let match of distanceMatches) {
  console.log(match[1]); // log the first captured group of this match
}
// Array [ "100" ]
// Array [ "50" ]
// Array [ "10" ]
```

### String.matchAll Gotcha

`String.matchAll` returns an Iterator, so after iteration / spread, the iterator will be exhausted.

### Capture without capturing with `g` flag

You can pass a regex with g flag to `String.match()`, then it will return an array with all the match result delimited with `|`.

> An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found. • If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.

```js
const dietaryRestrictions =
  /vegetarian|vegan|paleo|gluten free|[a-z]+ allergy/gi;
const result = 'this is a vegetarian vegan bee allergy free workspace'.match(
  dietaryRestrictions
);
console.log(result); //  ["vegetarian", "vegan", "bee allergy"]
```

> If you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() or String.prototype.matchAll() instead.

## Other Regex Special Characters

- `.` - any character except line breaks
- `\w` - equivalent to [a-zA-Z0-9_]
- `\d` - equivalent to [0-9]
- `\s` - any whitespace character (spaces, tabs, newline and others)
- `{n}` - match n-multiples of preceding expression?
  ```js
  /go{3}al/ //only matches "goooal"
  /a(ha){3}/ // only matches "ahahaha".
  ```
- `{n, m}` matches between n and m sets of the preceding expression
  ```js
  hello{1,3} // matches only "hello", "helloo", and "hellooo".
  ```
