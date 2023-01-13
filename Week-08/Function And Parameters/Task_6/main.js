
function multiply(...nums) {
    let res = 1;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === 'string') continue;
        res *= parseInt(nums[i]);
    }
    console.log(res);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000