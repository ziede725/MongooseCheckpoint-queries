const mongoose = require("mongoose") ;
const express= require ('express') ;  
const config = require('dotenv').config() ; 
const personModel = require('./person')
const app = express() ; 
const port= process.env.PORT 


const person = new personModel({
    name : 'zied' , 
    age : 27 , 
    favoriteFood : ["banana"]
})


mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/test`, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('database Connected')
    
})
.catch((err)=>{
    console.log(err)
})

// person.save()
// .then(doc=>{
//     console.log(doc)
// })
// .catch(err=>{
//     console.log(err)
// })


//personModel.create([{name:'john', age :35 , favoriteFood:['bananas', "strawberries"]},{name:'rahma', age :25 , favoriteFood:['sushi']}])

//Use model.find() to Search Your Database
//personModel.find({ name:'john' } , (err,document)=>{console.log(document)}) ;  

// use Mode.findOne() to search your Database ; 
// personModel.findOne({favoriteFood:['sushi']}, (err,doc)=>
// {
//         console.log(doc)    
// })


// use Model.findbyid to search your database: 
const id = '6068ecd59c6a2b7a32003175' ; 
// personModel.findById(id ,(err,doc)=>{console.log(doc)}) ; 

// personModel.findById(id, (err,doc)=>{
//     doc.set({favoriteFood: ['sushi','bananas']})
//     console.log(doc)
// })

// personModel.findOneAndUpdate({name:'zied'}, {age: 20},{new:true},(err,doc)=>{
//     console.log('hello world')
//     console.log(doc)
// }) ;


// personModel.findByIdAndRemove(id , (err,doc)=>{console.log(doc)}); 

// app.get('/', (req,res)=>{
//     res.send('hello')
// })

// personModel.remove({name: 'Mary'}, (err,doc)=>{
//     console.log(doc)
// })
personModel.count((err,count)=>{console.log(count)}) ; 
personModel.find({favoriteFood:"burrito"}).sort({name: 'asc'}).limit(2).select('name favoriteFood').exec((err,data)=>{console.log(data)}) ; 

app.listen(port || 4600 , ()=>{
    console.log(`listening on ${port}`)
} ) ; 
