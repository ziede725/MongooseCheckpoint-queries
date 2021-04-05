const mongoose = require('mongoose') ; 
const {Schema} = mongoose ; 
const personSchema= new Schema({
    name : { 
        type : String ,
        required : true } ,
    age : Number , 
    favoriteFood : [""] , 
})

module.exports = mongoose.model('Person',personSchema)