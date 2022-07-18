// const path = require('path');
// const express = require('express');
// const app = express();

// // Serve static files
// app.use(express.static(__dirname + '/dist/burger-queen'));

// // Send all requests to index.html
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/burger-queen/index.html'));
// });

// // default Heroku port
// app.listen(process.env.PORT || 5000);


const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/burger-queen'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/burger-queen/index.html'));});
app.listen(process.env.PORT || 4200);
