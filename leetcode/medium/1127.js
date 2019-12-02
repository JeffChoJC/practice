// Medium(5): 22, 46, 94, 238, 347
// Hard(1): 42(edited) 

// 22
const generateParenthesis = function (n) {
    const res = []
    function combos(l, r, combo) {
        if (l > r) return

        if (l === 0 && r === 0) {
            res.push(combo)
            return
        }

        if (l > 0) combos(l - 1, r, combo + "(")
        if (r > 0) combos(l, r - 1, combo + ")")
    }

    combos(n, n, "")
    return res
};

// 46
const permute1 = function (nums) {
    let perms = []

    const permutations = function (nums, sub = []) {
        if (nums.length === 0) perms.push(sub)

        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i]
            permutations(nums.slice(0, i).concat(nums.slice(i + 1)), sub.concat(curr))
        }

    }

    permutations(nums)
    return perms
}

const permute2 = function (nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);  // permutation results > n, starting with [[]]
    for (let prev of prevs) {  // iteration through current results
        for (let i = 0; i <= prev.length; i++) {  // iteration through values  
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert nth element
            res.push(p);
        }
    }
    return res;
};

const permute3 = function (nums) {
    if (nums.length <= 1) return [nums]

    const el = nums.pop()
    const permutations = permute3(nums)

    const res = []
    for (perm of permutations) {
        for (let i = 0; i <= perm.length; i++) {
            let p = perm.slice(0, i).concat([el]).concat(perm.slice(i))
            console.log(p)
            res.push(p)
        }
    }

    return res
}
console.log(permute3([1,2,3]))

// 94  ** This solution depends on which way (left or right) you want to travel first.
const inorderTraversal1 = function (root) { //recursive
    const res = []

    const traverse = (node) => {
        if (node === null) return


        traverse(node.left)
        res.push(node.val)
        traverse(node.right)
    }

    traverse(root)
    return res
};

const inorderTraversal2 = function (root) { //iterative
    const res = [] //
    const stack = [] //1, null

    while (root || stack.length !== 0) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            res.push(root.val)
            root = root.right
        }
    }

    return res
};

// 238
const productExceptSelf = function (nums) {
    const left = [1]
    const right = new Array(nums.length)
    right[right.length - 1] = 1
    const res = []

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        right[j] = right[j + 1] * nums[j + 1]
    }

    for (let k = 0; k < nums.length; k++) {
        res[k] = left[k] * right[k]
    }

    return res
};

// 347
const topKFrequent = function (nums, k) { //brute force
    const count = {}
    const res = []

    for (num of nums) {
        if (num in count) {
            count[num]++
        } else {
            count[num] = 1
        }
    }

    while (res.length !== k) {
        let max = 0
        let maxVal = 0

        for (num in count) {
            if (count[num] > max) {
                max = count[num]
                maxVal = num
            }
        }

        res.push(maxVal)
        count[maxVal] = 0
    }

    return res
};