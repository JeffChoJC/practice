//49
var groupAnagrams = function(strs) {
  const res = {};

  for (str of strs) {
    const sorted = str
      .split("")
      .sort()
      .join("");

    if (sorted in res) {
      res[sorted].push(str);
    } else {
      res[sorted] = [str];
    }
  }

  return Object.values(res);
};

//56
var merge = function(intervals) {
  intervals.sort((a, b) => {
    return b[0] - a[0];
  });

  if (intervals.length === 0) return [];

  let res = [intervals.pop()];
  let last = res[0];
  console.log(intervals);

  while (intervals.length > 0) {
    let cur = intervals.pop();
    if (cur[0] > last[1]) {
      last = cur;
      res.push(cur);
      continue;
    }

    last[1] = Math.max(last[1], cur[1]);
  }
  return res;
};