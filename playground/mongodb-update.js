const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
//   db.collection('Todos').findOneAndUpdate({
//       _id : new ObjectID("5e9f370a7d304f22a8dec7a1"
//       )},{$set:{ completed:false }},{
//             returnOriginal:false
//       }).then((result)=>{
//           console.log(result);
//       });
//   db.collection('Users').findOneAndUpdate({
//       _id : new ObjectID("5ea08fb4ae03d5ce4aac03c9"
//       )},{$set:{ name:"Narender Singh" }},{
//             returnOriginal:false
//       }).then((result)=>{
//           console.log(result);
//       });

    db.collection("Users").findOneAndUpdate({_id:new ObjectID("5ea08fb4ae03d5ce4aac03c9")},
    {$inc:{age:-1}},
    {returnOriginal:false}).then((result)=>{
        console.log(result);
    })

  db.close();
});
