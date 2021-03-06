//299
var getHint = function (secret, guess) { // brute force
    const nums = {}
    let A = 0
    let B = 0

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++
        } else {
            if (secret[i] in nums) {
                nums[secret[i]]++
            } else {
                nums[secret[i]] = 1
            }
        }
    }

    for (let j = 0; j < guess.length; j++) {
        if (secret[j] === guess[j]) {
            continue
        } else if (nums[guess[j]] > 0) {
            nums[guess[j]]--
            B++
        }
    }

    return A + "A" + B + "B"
};

function getHint(secret, guess) { // better
    var map = {};
    var A = 0;
    var B = 0;
    for (var i = 0; i < 10; i++) map[i] = 0;
    for (i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) A++;
        else {
            map[secret[i]]++; // add secret digit count
            B += map[secret[i]] <= 0 ? 1 : 0; // if you've seen the digit as a guess before, it will be negative
            map[guess[i]]--; // subtract guess digit count
            B += map[guess[i]] >= 0 ? 1 : 0; // if you've seen the digit as a secret before, it will be positive
        }
    }
    return A + 'A' + B + 'B';
}