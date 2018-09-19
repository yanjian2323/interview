/*
	惰性载入
*/

// 这是一般的写法，这么写每次都要if判断，其实只需要判断一次就够了，判断一次就知道浏览器支持哪种添加事件的方式
function addEvent (dom, type, callback) {
	if (window.addEventListener) {
		dom.addEventListener(type, callback, false);
	} else {
		dom.attchEvent('on' + type, callback);
	}
}

// 惰性载入函数的写法
function addEvent (dom, type, callback) {
	if (window.addEventListener) {
		addEvent = function (dom, type, callback) {
			dom.addEventListener(type, callback, false);
		};
	} else {
		addEvent = function (dom, type, callback) {
			dom.attchEvent('on' + type, callback);
		};
	}
	// 这里注意要执行一下
	addEvent(dom, type, callback);
}

/*
	有些低版本浏览器不支持localstorage，改用cookie来存储，判断浏览器支不支持localstrorage可以用惰性载入
*/

function setData (key, value) {
	if (window.localStorage) {
		setData = function (key, value) {
			window.localStorage.setItem(key, value);
		};
	} else {
		setData = function (key, value) {
			// 这里是伪代码
			util.setCookie(key, value);
		};
	}

	setData(key, value);
}

/*
	得到客户端userAgent的类型也可以采用惰性载入
*/

function getUA () {
	let ua = navigator.userAgent;
	if (ua.match(/andriod/i)) {
		getUA = () => 1;
		return 1;
	} else if (ua.match(/iphone/i)) {
		getUA = () => 2;
		return 2;
	} else if (ua.match(/xxx/i)) {// 这里是随便编了个xxx
		getUA = () => 3;
		return 3;
	}
}