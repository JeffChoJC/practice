// Easy(10): 104, 136, 169, 206     344, 412, 237, 283, 242, 217


// Medium(5): 94, 46, 22, 347, 238
// Hard(1): 42(edited) 

// 104
const maxDepth = function (root, depth = 0) {
    if (root === null) return 

    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
};

const maxDepth1 = function (root) {
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
const reverseList = function (head) { //iterative
    let prev = null
    while (head) {
        const next = head.next //save reference to next node
        head.next = prev //set current node's next node to previous node
        prev = head //assign current node as previous previous node
        head = next //assign next node as current node
    }

    return prev
};

const reverseList1 = function (head, prev = null) { //recursive
    console.log(head)
    if (head === null) return prev

    const next = head.next
    head.next = prev
    return reverseList(next, head)
};
