// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: process.env.ENVIRONMENT || 'development',
  db: {
    connectionString: 'mongodb://localhost:27017/deployd-tutorial'
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening on port:",  process.env.PORT || 5000);
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});
