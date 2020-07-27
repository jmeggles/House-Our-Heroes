const express = require("express");

const db = require("./models");

const session = require("express-session");

const passport = require("passport");



const app = express();

////////////// global isAthenticated function for showing pages that are public or pri

app.use(function(req, res, next){

  res.locals.isAuthenticated = req.

    isAuthenticated();

  next();

});



// set up PORT

const PORT = process.env.PORT || 8080;



// use Middleware

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));



// set up express-session

app.use(session({

  secret: "keyboard cat",

  resave: false,

  saveUninitialized: true

}));



// use passport middleware

app.use(passport.initialize());

app.use(passport.session());



const exhbs = require("express-handlebars");

app.engine("handlebars", exhbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");



// use routes

// import routes

const routes = require("./routes");

app.use(routes);



// connect to database and start server

db.sequelize.sync().then(() => {

  app.listen(PORT, () => {

    console.log(`app listening on: http://localhost:${PORT}`);

  });

});