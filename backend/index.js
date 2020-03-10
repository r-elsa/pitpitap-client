

// joi module for request validation  -  Joi is a class 

const Joi = require('joi')
//load express module, returns a function

const express = require('express');


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pitpitap_db",  { useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(!error){
        console.log('Success')
    }
    else{
        console.log("Error connecting to Mongo db database");
        
    }


})



//call function, returns an object of type express - middleware processing pipeline
const app = express()


//returns a piece of middleware 
app.use(express.json())

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }); 
//by convention,call the object 'app'
//object has some useful methods - get, post, put, delete


//implement a couple of endpoints that respond to a http get-request
//method takes two arguments - 1. root of website 2. callback function when we have an http get request to this endpoint 
//(2 arguments, request and responds) both have properties -- req- gives information about incoming request (req.app, req.baseUrl, req.body .. )
//read more at expressjs.com - API reference - 

    const qandas = [

        {   id:1,
            q:'לאיזה גילאים מיועד פיטפיטאפ?',
            a:'פיטפיטאפ מיועד לגילאי הגיל הרך: מגיל שנה עד 4, אך כמובן שהוא גם משחק לכל בני המשפחה.'
          },{
            id:2,
            q:'איך ניתן לשלם על מנוי בפיטפיטאפ?',
            a:'This is the answer'
          },{
            id:3,
            q:'איך עושים מנוי בפיטפיטאפ?',
            a:'This is the answer'
          },{
            id:4,
            q:'כמה אוספים ניתן להעלאות?',
            a:'This is the answer'
          },{
            id:5,
            q:'איך ניתן לבטל מנוי?',
            a:'This is the answer'
          },{
            id:6,
            q:'לאן הכסף של התרומה הולך?',
            a:'This is the answer'
          }]


          const defaultslides = [

            {
                id:1,
                title: '1. בחרו את הקטגוריה שבה תרצו לשחק: חיות משק, תחבורה, בבית שלי, כלי נגינה וכו׳..',
            },
            {
                id:2,
                title:'2. לחצו על הכרטיס שתרצו, לדוגמה: כלב, כאשר תלחצו על הכרטיס תופיע תמונה של החפץ/חיה שבחרתם, בכל לחיצה חדשה תופיע תמונה אחרת.',   
            },
            {
                id:3,
                title:'3. הוספת אוסף משלכם: לחצו על כפתור הפלוס בבר התחתון, בחרו את האוסף אותו תרצו להוסיף והחלו להוסיף תמונות לכל כרטיסייה.', 
            },
            {
                id:4,
                title:'4. כאשר תסיימו להוסיף את כל התמונוץ שתרצו לחצו על כפתור ״העלאת  אוסף״ וזהו האוסף שלכם יעלה ותוכלו להתחיל לשחק בו :)', 
            }]
        



//DEFINE A ROUTE:
app.get('/', (req, res) =>{

    //CALLBACKFUNCTION /ROUTEHANDLER
    res.send('Hello world!');
})

app.get('/api/qandas', (req,res) => {
    res.send(qandas);
})

app.get('/api/slides', (req,res) => {
    res.send(defaultslides);


})

//id is a parameter
app.get('/api/qandas/:id', (req,res) => {
    const item = qandas.find(i => i.id === parseInt(req.params.id));
    //not find a q and a with given id -  return https status code 404- pbject not found
    if (!item) {
        res.status(404).send('Item with given id not found')
        return;
    }

    res.send(item);



})

///request params object. name based on route parameters
app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.params)

})

// QUERY PARAMETERS - KEY-VALUE PAIRS -provide additional data to   e.g. localhost/5000/posts/2020/4?sortBy=name

app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.params)

})


///POST REQUEST - ADD NEW COURSE



//



app.post('/api/qandas', (req,res)=> {


    //validation with Joi
    const result = validateItem(req.body);



    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
    }


/*     if(!req.body.q || req.body.q.length < 3 ){
        res.status(400).send('q required, minimum 3 characters')
        return;

    }

    if(!req.body.a || req.body.a.length < 3 ){
        res.status(400).send('a required, minimum 3 characters')
        return;
    }
 */
    const item = {
        id: qandas.length + 1,
        //enable parsing of jsonobjects , by default not enabled by express
        q: req.body.q,
        a:req.body.a,

        //input validation



    };
    qandas.push(item)

    //return to the client
    res.send(item)


})


///UPDATING Q & A 

app.put('/api/qandas/:id', (req,res) => {

    
    //1.Look up the item &  If not existing -return 400 - Bad request

    const item = qandas.find(i => i.id === parseInt(req.params.id));
    //not find a q and a with given id -  return https status code 404- pbject not found
    if (!item) {
        res.status(404).send('Item with given id not found')
        return;
    }

        



    //3.Validate
    //If invalid - return 400 - Bad request'



    const result = validateItem(req.body);



    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
    }


        //4. Update item & Return the updated item


        item.q = req.body.q
        item.a = req.body.a

        res.send(item);


})



app.delete('/api/qandas/:id', (req,res) => {

    
    //1.Look up the item &  If not existing -return 400 - Bad request

    const item = qandas.find(i => i.id === parseInt(req.params.id));
    //not find a q and a with given id -  return https status code 404- pbject not found
    if (!item) {
        res.status(404).send('Item with given id not found')
        return;
    }




   //2.Delete

    const deleteItemIndex = qandas.indexOf(item)


    qandas.splice(deleteItemIndex, 1)


        res.send(item);


});
















function validateItem(item){

    const schema = {
        q: Joi.string().min(3).required(),
        a: Joi.string().min(3).required()

    }
    return Joi.validate(item, schema);



}





//nodemon index.js

//

/* app.post()
app.put()
app.delete() */

//LISTEN TO A GIVEN PORT 
// IN HOSTING ENVIRONMENT have ENVIRONMENT VARIABLE CALLED PORTS - VALUE IS SET OUTSIDE THE APPLICATION

//NEED TO READ THE VALUE OF THE PORT - BY USING THE PROCESS -GLOBAL OBJECT 
//env is the property  and name of environment value -- in this case PORT
//set PORT=5000

const port = process.env.PORT || 9000


app.listen(port, ()=> console.log(`Listening on port ${port}`))

