
const mongoose = require('mongoose')

  const QA = mongoose.model('qa', { id: Number , question: String, answer: String }); 

QA.find({ }, function getData (err, data) { 
    console.log(data);
    return data

});

module.exports =  QA
    