/*
请你编写一个函数，它的参数为一个整数数组nums、一个计算函数fn和初始值init。返回一个数组归约后 的值。
你可以定义一个数组归约后 的值，然后应用以下操作：
val = fn(init, nums[0])，val = fn(val, nums[1])，val = fn(val, nums[2])，
...直到数组中的每个元素都被处理完毕。返回 val 的最终值。
如果数组的长度为 0，它应该返回 init的值。

请你在不使用内置数组方法的Array.reduce前提下解决这个问题。

示例 1：
输入：
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
输出：10
解释：
初始值为 init=0 。
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
Val 最终值为 10。

示例 2：
输入：
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
输出：130
解释：
初始值为 init=0 。
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
Val 最终值为 130。

示例3:
输入：
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
输出：25
解释：这是一个空数组，所以返回 init 。

* */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

// var reduce = function(nums, fn, init) {
//     for(let i = 0; i < nums.length; i++){
//         init = fn(init,nums[i])
//     }
//     return init
// };




const fn = (num, cur) => num + cur;
const reduce = function (nums, fn, init) {
    //return nums.reduce(fn, init);
    let res = init;
    for (const num of nums) {
        res = fn(res, num);
    }
    return res;
};

// const result = reduce([1, 2, 3, 4], fn, 0);
const result = reduce([], fn, 25);

console.log(result);
