module.exports = function(db, app) {
    app.post('/api/add', async function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        
        const product = req.body;
        const collection = db.collection('products');
        
        try {
            const count = await collection.find({ 'id': product.id }).count();
            
            if (count == 0) {
                const result = await collection.insertOne(product);
                res.send({ 'num': result.insertedCount, err: null });
            } else {
                res.send({ num: 0, err: 'duplicate item' });
            }
        } catch (err) {
            res.send({ num: 0, err: err.message });
        }
    });
};