'use strict';

const Triangutron = function() {};
const DEFAULT_SIZE = 3;
const DEFAULT_MULTIPLIER = 100;

/**
 * Generate a random number.
 *
 * @private
 * @param {number} multiplier - Size multiplier.
 * @return {number} - Random number in range 1-100.
 */

function random(multiplier) {
    if (!Number.isInteger(multiplier)) {
        multiplier = DEFAULT_MULTIPLIER;
    }

    return Math.ceil(Math.random() * multiplier);
}

/**
 * Higher order iterator function for the reduction of a triangle.
 *
 * @private
 * @param {array} lastRow - Accumulator: Previous row of triangle.
 * @param {array} row - Current value: Current row of triangle.
 * @return {array} row - Current row of triangle, reduced.
 */

function reduceMax(lastRow, row) {
    return row.map((cell, index) => {
        return cell + Math.max(lastRow[index], lastRow[index + 1]);
    });
}

/**
 * Generate a triangle of a given size.
 *
 *  1. Create an array of given size.
 *  2. Create child arrays of decreasing size (triangle is upside down).
 *  3. Map random numerical values to child elements.
 *  4. Invert the triangle and return.
 *
 * @public
 * @requires triangles:random
 * @param {number} size - Triangutron size.
 * @return {array} - Multidimensional triangle array.
 */

Triangutron.prototype.create = function(size) {
    if (!Number.isInteger(size)) {
        size = DEFAULT_SIZE;
    }

    return [...Array(size)].map(() => [...Array(size--)].map(random)).reverse();
};

/**
 * Parse raw triangle string into multidimensional triangle array.
 *
 * The trim and filter removes any leading and trailing empty cells caused by
 * spaces or errant newlines.
 *
 * @public
 * @param {string} string - String to parse.
 * @param {array} - String parsed into triangle.
 */

Triangutron.prototype.fromString = function(string) {
    const parsed = string.trim().split('\n').map(row => row.trim().split(' ').map(parseFloat));
    return parsed.filter(row => row.every(Number.isInteger));
};

/**
 * Programmatically find the maximum path-value of a given triangle.
 *
 * Uses Array.reduce() with the first row serving as the injected value. This
 * (to toot my own horn because this is a personal project) is a quite elegant
 * solution that sidesteps the need for bounds checking if you pass in a valid
 * triangle.
 *
 * @public
 * @requires triangles:reduceMax
 * @param {array} triangle - Triangutron to test.
 * @return {number} max - Maximum path value.
 */

Triangutron.prototype.max = function(triangle) {
    const inverted = triangle.slice().reverse();
    return inverted.slice(1).reduce(reduceMax, inverted[0])[0];
};

module.exports = Object.create(Triangutron.prototype);
