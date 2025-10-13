const express = require('express');
const app = express();
//note create a logger middleware using  req.url and req.method  and time for log, create a logger file and add the logs in that file for each req with 
app.use((req, res, next) => {
    req.body = {name : "test"}
  console.log('1st middleware is running');
  next()
});



app.get('/', (req, res) => {
    console.log(req.body)
  res.send('HOME');
});

app.post('/users', (req,res)=>{
    console.log(req.body)
})

app.listen(3000, () => {
  console.log('server is running');
});
