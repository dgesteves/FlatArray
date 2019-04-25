/**
 *
 * @param arr
 * @returns {*}
 */
const flatArray = arr => arr
    .reduce((a, b) =>
        a.concat(Array.isArray(b) ? flatArray(b) : b), []
    );

flatArray([[1, 2, [3]], 4]);
