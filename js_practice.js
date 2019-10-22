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

console.log(quicksort([12, 31, 51, 2, 86, 142, 754, 22, 61, 23, 9, 0, 11]));