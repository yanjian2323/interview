// 函数柯里化的几种实现

function curry (fn) {
	// 用来保存fn的参数
	let args = [];

	// 参数传递满了就调用,否则就把参数保存到args里
	return function f() {
		[].push.apply(args, arguments);
		if (args.length === fn.length) {
			let ret = fn.apply(this, args);
			args.length = 0;
			return ret;
		} else {
			return f;
		}
	}
}

function curry2 (fn) {
	// 用来保存fn的参数
	let args = [];

	// 不传参数时开始真正的调用
	return function f() {
		if (arguments.length === 0) {
			let ret = fn.apply(this, args);
			args.length = 0;
			return ret;
		} else {
			[].push.apply(args, arguments);
			return f;
		}
	}
}

function curry3 (fn) {
	return function f(...args) {
		if (fn.length < args.length) {
			return function () {
				return f.apply(this, [...args, ...arguments]);
			};
		}
		return fn.apply(this, arguments);
	};
}

export curry;
export curry2;
export curry3;