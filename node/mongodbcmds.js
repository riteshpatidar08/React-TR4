//fetch db list in mongod server
//NOTE show databases

//create or switch to new database 
//NOTE use databaseName 

//creating collection in db
//NOTE VAR - 1 db.createCollection("collectionName")
//NOTE VAR - 2 db.collectionName.insertOne({}) ;


//renaming a collection
//NOTE db.oldCollectionName.renameCollection(newCOllectionName)

//CRUD QUERIES 

//READ 

//get all document from collection
//NOTE db.collectionName.find({filterobject})
// return array

//get single document 
//NOTE db.collectionName.findOne({filterobject})
//return the matching entity 

//create 

//create a singleDocument
//NOTE db.collectionName.insertOne({})

//creating multiple document 
//NOTE db.collectionName.insertMany([{},{}])

//update 
//updating a single document
//NOTE  db.collectionName.updateOne({filterobject}, {$set : {updatefield}})