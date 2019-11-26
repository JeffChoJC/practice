// Easy(10): 104, 136, 169, 206     344, 412, 237, 283, 242, 217


// Medium(5): 94, 46, 22, 347, 238
// Hard(1): 42(edited) 

// 104
const maxDepth = function (root, depth = 0) {
    if (root === null) return 

    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
};

const maxDepth = function (root) {
    return root === null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// 136
const singleNumber = function (nums) {
    let count = {}
    for (num of nums) {
        num in count ? count[num]++ : count[num] = 0
    }

    for (num in count) {
        if (count[num] < 1) return num
    }
};

// 169
const majorityElement = function (nums) {
    let count = {}
    for (num of nums) {
        num in count ? count[num]++ : count[num] = 1

        if (count[num] >= nums.length / 2) return num
    }
};

// 206
