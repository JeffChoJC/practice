function quicksort(nums) {
    if (nums.length <= 1) return nums;
    let pivot = nums[0];
    let less = [];
    let more = [];

    for (i = 1; i < nums.length; i++) {
        if (nums[i] <= pivot) {
            less.push(nums[i]);
        } else {
            more.push(nums[i]);
        }
    }

    return quicksort(less).concat(pivot).concat(quicksort(more));
}

function bubblesort(nums) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                sorted = false;
            }
        }
    }
    return nums;
}

function mergeSort(nums) {
    if (nums.length < 2) return nums

    const mid = Math.floor(nums.length / 2)

    let left = mergeSort(nums.slice(0, mid))
    let right = mergeSort(nums.slice(mid))

    return merge(left, right);
}

function merge(l, r) {
    const res = [];

    while (l.length || r.length) {
        const left = l.length ? l[0] : Infinity
        const right = r.length ? r[0] : Infinity

        if (left < right) {
            res.push(l.shift());
        } else {
            res.push(r.shift());
        }
    }

    return res
};

function add(str1, str2, str3 = "baz") {
    return [str1, str2, str3].join(" ")
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
        return func.apply(this, args);
    } else {
        return function(...args2) {
            return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
let curriedAdd = curry(add)

var nums1 = [12, 31, 51, 2, 86, 142, 754, 22, 61, 23, 9, 0, 11];
var nums2 = [22, 61, 11, 8, 96, 242, 624, 71, 23, 512, 6, 0, 90];
// console.log(quicksort(nums1));
// console.log(bubblesort(nums2));
// console.log(mergeSort(nums2));
console.log(curriedAdd("foo")("bar"))
console.log(curriedSum(1)(2)(3))