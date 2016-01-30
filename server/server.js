var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var staticPath = null;
var app = module.exports = loopback();
process.env.PWD = process.cwd();
var env = 'dev';
if (env !== 'prod') {
  staticPath = path.resolve(__dirname, '../client/');
  console.log("Running app in development mode");
} else {
  staticPath = path.resolve(__dirname, '../dist/');
  console.log("Running app in prodction mode");
}

// app.use('/bower_components/bootstrap/dist/css/bootstrap.min.css',loopback.static(path.resolve(process.env.PWD,'../client/bower_components/bootstrap/dist/css/bootstrap.min.css')));
// app.use('/bower_components/jquery/dist/',loopback.static(path.resolve(process.env.PWD,'../client/bower_components')));
// app.use('/bower_components/angular-bootstrap-confirm/dist/',loopback.static(path.resolve(process.env.PWD,'../client/bower_components/angular-bootstrap-confirm/dist/')));
// app.use('/bower_components/angular-simple-logger/dist/',loopback.static(path.resolve(process.env.PWD,'../client/bower_components/angular-simple-logger/dist/')));
app.use('/bower_components/*',loopback.static(path.resolve(process.env.PWD,'../client/bower_components/')));
app.use(loopback.static(staticPath));
// app.use('/bower_components/*/*',loopback.static(path.resolve(__dirname,'..client/bower_components/*')));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
