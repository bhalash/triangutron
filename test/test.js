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
    assert.plan(21);

    assert.equal(typeof triangutron.create, 'function');
    assert.equal(triangutron.create(5).length, 5);
    assert.equal(triangutron.create().length, 3);

    assert.throws(() => triangutron.create('ponies'), /^Invalid value 'ponies' supplied for triangle size.$/);
    assert.throws(() => triangutron.create('-3'), /^Invalid value '-3' supplied for triangle size.$/);
    assert.throws(() => triangutron.create('0'), /^Invalid value '0' supplied for triangle size.$/);

    triangutron.create(5).forEach((row, index) => {
        assert.true(Array.isArray(row));
        assert.true(row.every(Number.isInteger));
        assert.equal(row.length, index + 1);
    });
});
