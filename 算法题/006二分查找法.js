/*
* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
* */

/**
 * 第一版本：左闭右闭区间 [left, right]
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    if( !nums.length ) return;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if(nums[middle] < target) {
            left = middle + 1;
        }else if(nums[middle] > target) {
            right = middle - 1;
        }else {
            return  middle;
        }
    }
    return -1;
}

// console.log(search([2,5,7,8,9,12,56], 97));

/**
 * 第二版本：左闭右开区间 [left, right)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search2 = function (nums, target) {
    if(!nums.length) return;
    let left = 0;
    let right = nums.length;
    // 左闭右开区间，left === right 没有意义
    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if(nums[middle] < target) {
            left = middle + 1;
        }else if(nums[middle] > target) {
            right = middle;
        }else {
            return middle;
        }
    }
    return -1;
}
console.log(search2([2,5,7,8,9,12,56], 56));
