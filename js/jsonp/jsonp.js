// 实现一个jsonp

function getRandomName (prefix) {
	return prefix + Math.random().toString(36).replace(/[^a-z]/g,'');
}

// 第一种方式用script的onload和onerror监听
function jsonp (url, onsuccess, onerror) {
	let callbackName = getRandomName("jp_");

	window[callbackName] = function (data) {
		if (onsuccess && typeof onsuccess === 'function') {
			onsuccess(data);
		}
	};

	let sc = document.createElement('script');
	let head = document.head;
	sc.src = url + '?callback=' + callbackName;
	head.appendChild(sc);
	// 现代浏览器只会触发onload，并且readyState为undefined
	// 老的浏览器会触发onreadystatechange
	sc.onload = sc.onreadystatechange = function () {
		// console.log(this.readyState)
		if (!this.readyState || (/loaded|complete/.test(this.readyState))) {
			head.removeChild(sc);
			window[callbackName] = null;
		}
	}
	// onerror只能捕获到404异常，js的执行异常捕获不到
	sc.onerror = function (err) {
		if (onerror && typeof onerror === 'function') {
			onerror(err);
		}
	}
}

// 第二种实现方式不用onload和onerror，用timeout来捕获异常
function jsonp2 (url, {
	timeout = 6000,
	onsuccess = function () {},
	onerror = function () {}
} = {}) {
	let callbackName = getRandomName('jp_');
	let head = document.head;
	let sc = document.createElement('script');
	let timer = null;
	if (timeout)
		setTimeout(() => {
			clean();
			onerror(new Error('error'));
		}, timeout);

	// 清理
	function clean () {
		if (timer) clearTimeout(timer);
		timer = null;
		head.removeChild(sc);
		window[callbackName] = null;
	}

	window[callbackName] = function (data) {
		onsuccess(data);
		clean();
	}

	sc.src = url + '?callback=' + callbackName;
	head.appendChild(sc);
}