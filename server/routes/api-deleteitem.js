module.exports = function(db, app, ObjectId) {
    app.post('/api/deleteitem', async function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        
        const productID = req.body.productid;
        const objectid = new ObjectId(productID);
        const collection = db.collection('products');
        
        try {
            await collection.deleteOne({ _id: objectid });
            const data = await collection.find({}).toArray();
            res.send(data);
        } catch (err) {
            res.sendStatus(500);
        }
    });
};