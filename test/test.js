const tape = require('tape');
const triangutron = require('../');

const triangle = {
    raw: `
           3
          7 4
         2 4 6
        8 5 9 3
    `,
    parsed: [
        [3],
        [7, 4],
        [2, 4, 6],
        [8, 5, 9, 3]
    ],
    reduced: 23
};

/**
 * max() Method
 * =============================================================================
 */

tape('max()', assert => {
    assert.plan(2);

    assert.equal(typeof triangutron.max, 'function');
    assert.equal(triangutron.max(triangle.parsed), triangle.reduced);
});

/**
 * fromString() Method
 * =============================================================================
 */

tape('fromString()', assert => {
    assert.plan(2);

    assert.equal(typeof triangutron.fromString, 'function');
    assert.deepEqual(triangutron.fromString(triangle.raw), triangle.parsed);
});

/**
 * create() Method
 * =============================================================================
 */

tape('create()', assert => {
    assert.plan(17);

    assert.equal(typeof triangutron.create, 'function');
    assert.equal(triangutron.create(5).length, 5);

    triangutron.create(5).forEach((row, index) => {
        assert.true(Array.isArray(row));
        assert.true(row.every(Number.isInteger));
        assert.equal(row.length, index + 1);
    });
});
