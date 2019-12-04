// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  const table = new Array(grid.length).fill(new Array(grid[0].length).fill(0));
  table[0][0] = grid[0][0];

  for (let y = 0; y < table.length; y++) {
    for (let x = 0; x < table[0].length; x++) {
      if (x === 0 && y === 0) continue;

      if (x === 0) {
        table[y][x] = table[y - 1][x] + grid[y][x];
      } else if (y === 0) {
        table[y][x] = table[y][x - 1] + grid[y][x];
      } else {
        table[y][x] = Math.min(
          table[y - 1][x] + grid[y][x],
          table[y][x - 1] + grid[y][x]
        );
      }
    }
  }

  return table[table.length - 1][table[0].length - 1];
}