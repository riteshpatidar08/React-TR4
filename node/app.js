const express = require('express');
const app = express();
const {getAllArticles} = require('./controllers/articlesControllers')
//note create a logger middleware using  req.url and req.method  and time for log, create a logger file and add the logs in that file for each req .

//NOTE => Middleware Are The Functions In The express which have access to the req,res and next middleware function  , middleware can run any code and  access request and response object and modify them, then this modification on the req  can be available for next middleware in the req-res cylce.

//GLOBAL middlware run for all routes in the app
//there are two routes available in your express app in currrent scenerio like '/' and '/users' it will run for both of them you make req
app.use((req, res, next) => {
  req.body = { name: 'test' };
  console.log('1st middleware is running');
  next();
});

//GLOBAL MIDDLEWARE 2
//there are two routes available in your express app in currrent scenerio like '/' and '/users' it will run for both of them you make req
app.use((req, res, next) => {
  const date = new Date();
  console.log(req.method, req.url, date.toLocaleString());
  next();
});

//NOTE create a middleware which  runs  for individual routes not for all routes
function test(req, res, next) {
  console.log('this will only run for home route');
  next();
}

function CheckApiKey(req, res, next) {
  const apiKey = req.params.apikey;
  if (apiKey === 'test123') {
    next();
  } else {
    res.send('Invalid Api key');
  }
}

app.get('/', test, (req, res) => {
  console.log(req.body);
  res.send('HOME');
});

app.post('/users', (req, res) => {
  console.log(req.body);
});

app.get('/movies/:apikey', CheckApiKey, (req, res) => {
  res.send('MOVIES');
});
app
  .route('/articles')
  .get(getAllArticles)
  .post((req, res) => {
    res.send('added new articles');
  });

app.listen(3000, () => {
  console.log('server is running');
});
