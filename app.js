var express     = require('express'),
app             = express() 
bodyParser      = require('body-parser'),
passport        = require('passport'),
localStrategy   = require('passport-local'),
methodOverride  = require('method-override');

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

  //app.use(express.bodyParser());
  // parse application/json
  app.use(bodyParser.json());                        
  
  // parse application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: true }));
  
//app.use(app.router);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.set('view options', {
    layout: false
});

// app.use(require('express-session')({
//     secret:"Its a secret",
//     resave: false,
//     saveUninitialized: false
// }));

// Static data for all views
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


// incuding routes
var homeRoutes = require('./routes/index');
var courseRoutes = require('./routes/course');
var registerRoutes = require('./routes/register');

app.use('/',homeRoutes);
app.use('/course',courseRoutes);
app.use('/register',registerRoutes);
app.listen(10000, function(){
    console.log("tacraipur now listening on port 10000");
});
