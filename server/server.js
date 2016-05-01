var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var staticPath = null;
var app = module.exports = loopback();
var multer = require('multer');
var fs = require('fs');
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
app.use('/bower_components/*', loopback.static(path.resolve(process.env.PWD, '../client/bower_components/')));
app.use(loopback.static(staticPath));
// app.use('/bower_components/*/*',loopback.static(path.resolve(__dirname,'..client/bower_components/*')));

app.start = function() {
    // start the web server
    return app.listen(function() {
        app.emit('started');
        console.log('Web server listening at: %s', app.get('url'));
    });
};
var upload = multer({
    dest: 'client/admin/assets/images',
    rename: function(fieldname, filename) {
        return filename + "_" + Date.now();
    }
});
app.post('/img', upload.single('file'), function(req, res, next) {
    //console.log(req.file);
    // console.log(req.body);
    var fullUrl = req.protocol + '://' + req.get('host') + '/';
    var temp_path = req.file.path;
    var dest = req.file.destination;
    if (req.body.businessId)

        dest = dest + '/business';
    var re = /(?:\.([^.]+))?$/;
    var new_path = dest + '/' + req.body.businessId + '.' + req.file.originalname.replace(/^.*\./, '');
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }
    console.log(new_path);
    var arr = new_path.split("/");
    arr.splice(0, 1);
    arr = arr.join("/");
    arr = fullUrl + arr;
    //console.log(arr);
    if (req.body.businessId) {
        app.models.Business.findById(req.body.businessId, function(err, business) {
            if (err || !business) {
                console.log('Error: ' + err);
            } else {
                // console.log(arr);
                //var newArray = business.bookingimages;
                //newArray.push(arr);
                // console.log(newArray);
                business.updateAttributes({
                    img: arr
                }, function(err, updatedBusiness) {
                    // console.log(updatedBusiness);
                })
            }
        })
    }
    fs.rename(temp_path, new_path, function(err) {
        if (err) {
            //console.log(err);
        }
    });
    res.setHeader('Content-Type', 'application/json');
    res.json({
        img: arr
    });
});
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});