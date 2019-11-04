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

var nums1 = [12, 31, 51, 2, 86, 142, 754, 22, 61, 23, 9, 0, 11];
console.log(quicksort(nums1));
console.log(bubblesort(nums1));