// Medium(5): 22, 46   94, 347, 238
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
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    console.log(res)
    return res;
};

// 94
const inorderTraversal = function (root) { //recursive
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

// 347

// 238