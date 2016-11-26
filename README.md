[![Build Status](https://travis-ci.org/bhalash/triangutron.svg?branch=master)](https://travis-ci.org/bhalash/triangutron) [![devDependencies Status](https://david-dm.org/bhalash/triangutron/dev-status.png)](https://david-dm.org/bhalash/triangutron?type=dev)

# Triangutron
Triangutron is a functionally-programmed max-path-value solver for Project Euler's [eighteenth][1] and [sixty-seventh][2] problems.

The two problems require the triangle be reduced to a single maximum value in an efficient manner. This code does so by reducing the triangle from the last row to the first, increasing the max value as it ascends.

If you ever get bored, you can also generate your own triangles of arbitrary-side.

## Installation

    npm install triangutron

## Testing

    npm run test

## Usage
(This also solves problems [18][1] and [67][2].)

```javascript
#!/usr/bin/env node
const triangutron = require('triangutron');
const fs = require('fs');

const eighteen = `
    75
    95 64
    17 47 82
    18 35 87 10
    20 04 82 47 65
    19 01 23 75 03 34
    88 02 77 73 07 63 67
    99 65 04 28 06 16 70 92
    41 41 26 56 83 40 80 70 33
    41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
    63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`;

fs.readFile('./p067_triangle.txt', 'utf8', (_, data) => {
    // Solution for Problem #67.
    console.log(triangutron.max(triangutron.fromString(data)));
});

// Solution for problem #18.
console.log(triangutron.max(triangutron.fromString(eighteen)));

// Create and reduce a 5000-row triangle.
console.log(triangutron.max(triangutron.create(5000)));
```

## Copyright
Copyright (c) 2016 [Mark Grealish](https://www.bhalash.com). See [LICENSE](LICENSE) for details.

[1]: https://projecteuler.net/problem=18 "Problem 18"
[2]: https://projecteuler.net/problem=67 "Problem 67"
