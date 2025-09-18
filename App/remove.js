module.exports = async function(collection) {

    console.log('** Removing Product **');
    
    try {
        const result = await collection.deleteOne({ id: 3 });
        console.log(`Deleted ${result.deletedCount} product(s)`);
    } catch (err) {
        console.error('Error deleting product:', err);
    }
};