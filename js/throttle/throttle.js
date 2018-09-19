/*
	节流函数的几种实现
	节流就是在一段时间内频繁的触发，但是在这个期间内只执行一次
*/

// 使用闭包实现
function throttle (fn, context) {
	let _first = false;
	let _timer = null;
	return function () {
		if (_first) {
			fn.apply(context, arguments);
			_first = true;
			return;
		}
		if (_timer) {
			return;
		}
		_timer = setTimeout(function () {
			clearTimeout(_timer);
			_timer = null;
			fn.apply(context, arguments);
		}, 100);
	};
}

// 不使用闭包，把变量保存在方法的属性上
/*
	这个方法的缺陷也很明显，虽然第一次会立即执行，但是一旦用户停止交互，
	隔一段时间再开始交互触发事件的时候，不会立马执行，还是有100ms的延迟
	上面的throttle也有这个问题
*/
function throttle2 (fn, context) {
	return function () {
		if (typeof fn.tId === 'undefined') {
			fn.apply(context, arguments);
			return;
		}
		if (fn.tId) {
			return;
		}
		fn.tId = setTimeout(function () {
			fn.apply(context, arguments);
			fn.tId = 0;
		}, 100);
	};
}

/*
	这个方法解决了上面2个方法的问题
*/
function throttle3 (fn, context) {
	return function () {
		if (!fn.tId) {
			fn.apply(context, arguments);
			fn.tId = 1;
			setTimeout(function () {
				fn.tId = 0;
			}, 100);
		}
	};
}