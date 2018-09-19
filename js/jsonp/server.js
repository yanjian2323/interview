let http = require('http');
let url = require('url');

let app = http.createServer((req, res) => {
	
	if (req.url.indexOf('/jsonp') > -1) {
		let cbName = url.parse(req.url, true).query.callback;
		res.writeHead(200, {
			'Content-Type': 'application/javascript'
		});
		res.end(`${cbName}(${JSON.stringify({name:'yanjian',age:28})})`);
		return;
		// res.end('alert()');
	}
	res.writeHead(404);
	res.end('');
});

app.listen(8085);