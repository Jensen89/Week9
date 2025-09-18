module.exports = function(db, app, ObjectId) {
    app.post('/api/update', async function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        
        const product = req.body;
        const objectid = new ObjectId(product.objid);
        const collection = db.collection('products');
        
        try {
            await collection.updateOne(
                { _id: objectid },
                {
                    $set: {
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        units: product.units
                    }
                }
            );
            res.send({ 'ok': product.objid });
        } catch (err) {
            res.sendStatus(500);
        }
    });
};