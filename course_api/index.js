var cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");

const path = require('path')


// create express app
const app = express(); 
var router = express.Router({ strict: true });

app.use('/media', express.static(path.join(__dirname, '../media')))
app.use('/static', express.static('public'))

 var corsOptions = { origin: ['http://localhost:3011', 'http://localhost:3000' ] }


app.use(cors(corsOptions)); 
// Setup server port
const port = process.env.PORT || 5001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());

app.use("/", router);
require("./routes/routes")(app); 

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
