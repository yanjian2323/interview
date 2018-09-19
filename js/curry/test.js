import { curry2 } from './curry';
// import curry2 from './curry2';

// 柯里化的应用

// 假如有这么一个应用场景，需要对数组进行降序排列，并且要多次调用，可以把排序的逻辑固定化成一个参数

let sortCurry = curry2(Array.prototype.sort);
let curryFn = sortCurry(function (a, b) {
	return b - a;
});

Array.prototype.sortDesc = function () {
	curryFn.call(this);
}

let arr = [1,2,3,4,5,6];
arr.sortDesc();
console.log(arr);

// 另外一组数据要进行降序，直接调用sortDesc
let arr2 = [7,8,9,10];
arr2.sortDesc();
console.log(arr);