const router = require('express').Router();
const{createbulk} = require('../../multiple_bulkcreation_API/controller/createbulkrecords.controller');

router.post("/createbulk",createbulk);

module.exports= router;






