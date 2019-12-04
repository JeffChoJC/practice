// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
    const table = new Array(n + 1).fill(0);
    table[0] = 1;

    for (let i = 1; i <= n; i++) {
        if (i >= 1) {
            table[i] += table[i - 1];
        }

        if (i >= 2) {
            table[i] += table[i - 2];
        }
    }

    return table[n];
}