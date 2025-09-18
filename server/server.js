const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const client = new MongoClient('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('mydb');
        
        // Include ALL route modules
        require('./routes/api-add.js')(db, app);
        require('./routes/api-getlist.js')(db, app);
        require('./routes/api-deleteitem.js')(db, app, ObjectId);
        require('./routes/api-update.js')(db, app, ObjectId);
        require('./routes/api-getitem.js')(db, app, ObjectId);    
        require('./routes/api-validid.js')(db, app);             
        
        const server = http.Server(app);
        server.listen(3000, () => {
            console.log('Server running on port 3000');
        });
        
    } catch (err) {
        console.error('Error:', err);
    }
}

main();