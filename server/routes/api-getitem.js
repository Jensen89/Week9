module.exports = function(db, app, ObjectId) {
    app.post('/api/getitem', async function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        
        const productID = req.body.productid;
        const objectid = new ObjectId(productID);
        const collection = db.collection('products');
        
        try {
            const product = await collection.findOne({ _id: objectid });
            res.send(product);
        } catch (err) {
            console.error('Error getting item:', err);
            res.sendStatus(500);
        }
    });
};