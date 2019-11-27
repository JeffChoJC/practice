// Easy(10): 104, 136, 169, 206, 217, 237, 242, 283, 344, 412


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

// 217
const containsDuplicate = function (nums) {
    let count = {}
    for (num of nums) {
        if (num in count) {
            return true
        } else {
            count[num] = 0
        }
    }

    return false
};

// 237
const deleteNode = function (node) { //only given access to the node to be deleted
    node.val = node.next.val
    node.next = node.next.next
};

// 242
var isAnagram = function (s, t) {
    let crosscheck = {}
    for (char of s) {
        char in crosscheck ? crosscheck[char]++ : crosscheck[char] = 1
    }

    for (char of t) {
        if (char in crosscheck) {
            crosscheck[char]--
        } else {
            return false
        }
    }

    for (char in crosscheck) {
        if (crosscheck[char] > 0) return false
    }

    return true
};

// 283
const moveZeroes = function (nums) { //brute force
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === 0 && nums[i + 1] !== 0) {
                sorted = false
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
            }
        }
    }

    return nums
};

const moveZeroes = function (nums) {
    let i = 0
    let j = 1

    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        } else if (nums[i] !== 0) {
            i++
        }

        j++
    }

    return nums
}

// 344
const reverseString = function (s) { //brute force
    let i = 0
    let j = s.length - 1

    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }

    return s
};

const reverseString1 = function (s) { //optimized
    let i = 0
    while (i < s.length / 2) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
        i++
    }

    return s
}

// 412
