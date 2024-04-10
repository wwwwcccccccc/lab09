const { MongoClient, ObjectId } = require('mongodb');
process.env.MONGODB_URI = 'mongodb://comp7980-spring2024:1RDt0ukywAZWA06kUErNTKZ07HLNnoJeZ4ulRg60lziBfw3mCz1FEDwDOIlmFLlgOwQe8SSMI6PjACDb47BrcQ%3D%3D@comp7980-spring2024.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@comp7980-spring2024@';
if (!process.env.MONGODB_URI) {
// throw new Error('Please define the MONGODB_URI environment variable inside.env.local');
    process.env.MONGODB_URI = 'mongodb://localhost:27017';
}
// Connect to MongoDB
async function connectToDB() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('bookingsDB');
    db.client = client;
    return db;
}
module.exports = { connectToDB, ObjectId };