const { Op } = require("sequelize");
const User = require('../../multiple_bulkcreation_API/model/bulkmodel');
const moment = require('moment');

  exports.createbulk = async (req, res) => {
    try {
        const {username,password} = req.body;
        const data=[
    
            {username:'user1',password:'password 1'},
            {username:'user1',passowrd:'password 1'},
            {username:'user1',passowrd:'password 1'},
    
    ];
        await User.bulkCreate(req.body.data);
        console.log('Users created successfully');
        res.status(200).json({msg:'Records added successfully.....'});
    }

catch(error){
    console.log('Error creating users.');
}}