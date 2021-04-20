# JS Fundamentals

## Syntaxes

### C

```c
main() {
    printf("hello, world");
}
```

### Java

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hello, world");
    }
}
```

### JavaScript

```js
console.log('hello, world');
```

## Gotchas

### Switch statement uses strict comparison

The following code will alert "Nope!".

```js
const answer = prompt('Guess my number!');
switch (answer) {
  case 1:
    alert('Correct!');
    break;
  default:
    alert('Nope!');
    break;
}
```

### "Between" usually means "exclusive"

Between 1 and 5 means 2, 3, 4.
