const mongoose = require('mongoose');

const Slide = mongoose.model('slide', { item: String });

/* const item = new Slide({ item: 'adfhgjnfghdghb' }); */
/* item.save().then(() => console.log('slide works')); */



Slide.find({ }, function getData (err, data) { 
    console.log(err, data);
    return data

});


module.exports = Slide







    
