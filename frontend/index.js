
const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const port = 3030;
const option = {
	key: fs.readFileSync('../cert/k8s-master.key'),
	cert: fs.readFileSync('../cert/k8s-master.crt')
}

app.use(express.static('public'));


https.createServer(option,app).listen(port, function() {
	console.log(`HTTPS server listening port ${port}`)

});
//app.listen(port, () => console.log(`Mediasoup client app is listening on port ${port}!`));
