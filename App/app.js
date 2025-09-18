const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const client = new MongoClient(url);

async function main () {
    
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);

        try {
            await db.collection('products').drop();
            console.log('Dropped existing products collection');
        } catch (err) {
            console.log("No existing collection to drop");
        }

        const collection = db.collection('products')

        const create = require('./create.js')
        const read = require('./read.js')
        const update = require('./update.js')
        const remove = require('./remove.js')

        await create(collection)
        await read(collection)
        await update(collection)
        await read(collection)
        await remove(collection)
        await read(collection)

    } catch (err) {
        console.error('Error:', err)
    } finally {
        await client.close()
        console.log('Connection closed')
    }
}

main();