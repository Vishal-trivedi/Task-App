//const mongodb = require("mongodb")
//const MongoClient = mongodb.MongoClient
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = "fasttrack";
//const id= new ObjectID()
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useUnifiedTopology: true },(error,client)=>{
if(error){
    return console.log("Unable to connect to database")

}   
const db = client.db(databaseName) 
//db.collection("st").insertOne({
  //  _id:id,
    //name:'Vishal',
    //age:'21'
//}, (error,result) =>{
//if(error){
  //  console.log("Error in insertion")
//}
//console.log(result.ops)
//})

db.collection('st').updateOne({
    _id: new ObjectID("5e03b591b0429b4a6c25daf9")
},{
    $set:{
        age:'1'
    }
}).then((results)=>{
    console.log(results)
}).catch((error)=>{
    console.log(error)
})
})