# has-friday-the-thirteenth

Tells you if a given month has a Friday the 13th.

# Install

```shell
npm install has-friday-the-thirteenth
```

# Usage

Import the package into your project:

```js
const hasFridayTheThirteenth = require('has-friday-the-thirteenth');
```

The method `#hasFridayTheThirteenth` accepts a string, number or `Date` and returns a boolean.

Check using a date string. Any string able to be parsed by `Date.parse()` is valid:

```js
const foo = hasFridayTheThirteenth('January 1, 2023 00:00:00');

// true
console.log(foo);

const bar = hasFridayTheThirtheenth('31 Oct 2022 00:12:30 GMT');

// false
console.log(bar);
```

Check using a native `Date` object:

```js
const bool = hasFridayTheThirteenth(new Date(2022, 9, 31));
```

Check using a timestamp:

```js
const bool = hasFridayTheThirteenth(Date.now());
```

# License

MIT
