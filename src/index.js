const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const passport = require('passport');
//const session = require("express-session");
//const MySQLStore = require("express-mysql-session");
//const database = require('./database');
const { json } = require("express");

const app = express();
require('./lib/passport');

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  handlebars({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

/*app.use(
  session({
    secret: "Diego_jp",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);*/
//app.use(flash());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  //app.locals.success = req.flash("success");
  next();
});

app.use(require("./routes/index"));
app.use(require("./routes/authentication"));
app.use("/links", require("./routes/links"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
