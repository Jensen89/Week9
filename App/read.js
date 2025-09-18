module.exports = async function(collection) {
    console.log('** Reading Products **');
    
    try {
        const products = await collection.find({}).toArray();
        console.log('All products in database:');
        products.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Units: ${product.units}`);
        });
        return products;
    } catch (err) {
        console.error('Error reading products:', err);
    }
};