module.exports = function(db, app) {
    app.post('/api/checkvalidid', async function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        
        const product = req.body;
        const collection = db.collection('products');
        
        try {
            const count = await collection.countDocuments({ 'id': product.id });
            
            if (count == 0) {
                res.send({ success: 1, topnum: 0 });
            } else {
                //Find highest ID for suggestion
                const items = await collection.find({}).sort({ id: -1 }).limit(1).toArray();
                res.send({ success: 0, topnum: items[0].id });
            }
        } catch (err) {
            console.error('Error checking valid ID:', err);
            res.sendStatus(500);
        }
    });
};