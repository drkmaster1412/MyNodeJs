const mongoose = require('mongoose');
// const url = "mongodb://localhost:27017/EmployeeDB";
const url = "mongodb+srv://darkmaster1412:huyhoang022002@cluster0.nqtmz.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
