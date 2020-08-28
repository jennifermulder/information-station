const express = require('express');
const routes = require('./controllers');
//importing sequelize connection that is in connection.js
const sequelize = require('./config/connection');

// //setup handlebars as template engine
// const exphbs = require('express-handlebars');
// //helper function
// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });

//make public folder available
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//to use express-session and sequalize-store
//creates session
const session = require('express-session');
//connects session to database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
//end session/ sequelize store

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//takes the contents of the public folder and makes them static
app.use(express.static(path.join(__dirname, 'public')));
// //set up handlebars
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// // turn on routes
// app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));
}).catch(err => console.log(err))