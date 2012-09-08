var app = require('express').createServer();
app.get('/', function(req, res) {
    res.sendfile('public/hello.html');
//    res.send('Hello from <a href="http://appfog.com">AppFog.com</a>. Hi there.');
});
app.listen(process.env.VCAP_APP_PORT || 3000);
