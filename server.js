const express = require('express')
const MongoClient = require("mongodb").MongoClient;


const app = express()
const port = 8080


app.get('/', function(req, res) {
  res.send('Hello World!')
})

// MEAN, MERN
// Mongo, Express, Angular, Nodejs
// Mongo, Express, React, Nodejs

app.get('/tasks', function(req, res) {
  const client = new MongoClient('mongodb://localhost');
  
  async function main() {
    await client.connect();
    const db = client.db('react_test');
    const collection = db.collection('tasks');
    const findResult = await collection.find({}).toArray();
    res.send(findResult);
  }
  
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})