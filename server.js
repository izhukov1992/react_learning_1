const express = require('express')
const {MongoClient, ObjectId} = require('mongodb');


const app = express()
const port = 8080

app.use(express.json());
app.use(express.static('build'));

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

app.post('/tasks/add', function(req, res) {
  let task = {
    task_name: req.body.task_name,
    prompt: req.body.prompt,
    done: false
  }

  const client = new MongoClient('mongodb://localhost');

  async function main(task) {
    await client.connect();
    const db = client.db('react_test');
    const collection = db.collection('tasks');
    const ret = await collection.insertOne(task);
    res.send(task);
  }
  
  main(task)
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

})

app.post('/tasks/:id', function(req, res) {
  const client = new MongoClient('mongodb://localhost');

  async function main(id) {
    await client.connect();
    const db = client.db('react_test');
    const collection = db.collection('tasks');
    const ret = await collection.updateOne({_id: ObjectId(id)}, {'$set': {done: !req.body.done}});
    res.send({});
  }

  main(req.params.id)
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})











