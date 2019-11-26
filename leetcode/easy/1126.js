// Easy(10): 344, 104, 136, 412, 206, 237, 283, 169, 242, 217
// Medium(5): 94, 46, 22, 347, 238
// Hard(1): 42(edited) 

// 104
var maxDepth = function (root, depth = 0) {
    if (root === null) return depth

    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
};

