[![Build Status](https://travis-ci.org/bhalash/lexicographer.svg?branch=master)](https://travis-ci.org/bhalash/lexicographer) [![devDependencies Status](https://david-dm.org/bhalash/lexicographer/dev-status.png)](https://david-dm.org/bhalash/lexicographer?type=dev)

# Lexicographer
Lexicographer is a [lexicographic permutation][1] generator created as a direct result of [Project Euler's twenty-fourth problem][3].

One time, many years ago during my first pass through Project Euler, this problem [owned the shit out of me][4]. Like, badly owned me. For the life of me I couldn't make the mental translation from mathematical method to functional algorithm. I gave up in the end, and used a solution scalped from some random website.

Well, fuck that noise.

This is a fully-functional [functional][5] lexicographic permutation [generator][2] generator. It doesn't use some fancy algorithm or mathematical inside to jump to the solution of the exercise. No, fuck that. This code _owns the shit out of the entire problem_ of lexicographic permutation in an over-engineered way. There are [test suites][6] and [comment blocks][7] and [examples][8] and [recursive README files][9] full of foul-mouthed trash talk.

## Installation

    npm install lexicographer

## Testing

    npm run test

## Usage
(This also solves problems [18][3] and [67][5].)

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
    console.log(triangle.max(triangle.fromString(data)));
});

// Solution for problem #18.
console.log(triangle.max(triangle.fromString(eighteen)));
```

## Copyright

Copyright (c) 2016 [Mark Grealish][10]. See [LICENSE](LICENSE) for details.

[1]: https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order "Permutation: Generation in lexicographic order"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function* "function*"
[3]: https://projecteuler.net/problem=24 "Problem 24"
[4]: https://www.bhalash.com/archives/13544792394 "Project Euler Problem 24"
[5]: https://en.wikipedia.org/wiki/Functional_programming "Functional programming"
[6]: test/test.js
[7]: lexicographer.js
[8]: #usage
[9]: README.md
[10]: project_euler_solution.js
[11]: https://www.bhalash.com
