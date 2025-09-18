module.exports = async function(collection) {

    console.log('** Updating Product **');
    
    try {
        const result = await collection.updateOne(
            { id: 1 },
            { 
                $set: { 
                    price: 10.99,
                    units: 50,
                    description: '16Gb USB stick - Updated'
                } 
            }
        );
        console.log(`Updated ${result.modifiedCount} product(s)`);
    } catch (err) {
        console.error('Error updating product:', err);
    }
};