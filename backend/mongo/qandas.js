
const mongoose = require('mongoose')

 /* const qa = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }

})



module.exports = mongoose.model('qa', qa) */



/*  const mongoose = require('mongoose'); */

/* 
var QuestionAnswer = new mongoose.Schema({
    question:{
        type: String,
        required:"Required"
    },
    answer:{
        type: String,
        required:"Required"
    }



}) */


/*  mongoose.model("Qa", QuestionAnswer)  */


  const QA = mongoose.model('qa', { question: String, answer: String }); 
/*
const item = new QA({ question: 'question', answer: 'answer' });
item.save().then(() => console.log('q and a works')); */


QA.find({ }, function getData (err, data) { 
    console.log(err, data);
    const answer = data
    console.log('THIS !!!!!!!!!!!:', data)
    return data

});

module.exports =  QA
    