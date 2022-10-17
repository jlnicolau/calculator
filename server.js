//first require the packages
const express = require('express');
const bodyParser = require('body-parser');

//start the express object.
const app = express();
//use bodyParser as a third-part middleware
//(http://expressjs.com/en/guide/using-middleware.html#middleware.third-party)
app.use(bodyParser.urlencoded({ extended: true }));

//it controls the get response-request cycle.
//when the client reaches the port 3000 (defined by the app.listen() method below) the access send a GET request to the router "/". For that case, the response will be the index.html file. 
app.get("/", function (req, res) {
   //res.send("eita !!!")
   res.sendFile(__dirname + "/index.html");
});

//it controls the post response-request cycle.
app.post("/", function (req, res) {

   let num1 = Number(req.body.num1);
   let num2 = Number(req.body.num2);

   let result = num1 + num2;
   res.send("Thanks for posting that. The result is: " + result);
})

//start listen to the port for requests
app.listen('3000');