const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(bodyParser.json());


const createbulkdata= require("./routes/bulkroute");
// Using Routes 
app.use('/',createbulkdata);
  
  // set port, listen for requests
  const PORT = process.env.PORT || 2060;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  