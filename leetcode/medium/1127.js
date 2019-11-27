// Medium(5): 94, 46, 22, 347, 238
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

// 94

// 347

// 238