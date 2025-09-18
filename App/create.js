module.exports = async function (collection) {

    console.log('** Creating Products **');

    const products = [
        {

            id: 1,
            name: '16GB USB',
            description: '16gb usb stick',
            price: 8.00,
            units: 50

        },
        {

            id: 2,
            name: '64GB USB',
            description: '64gb usb stick',
            price: 30.00,
            units: 25

        },
        {
            id: 3,
            name: '1TB External HD',
            description: '1tb external hard drive',
            price: 100.00,
            units: 10

        }
    ];

    try {
        const result = await collection.insertMany(products);
        console.log('Inserted ${result.insertedCount} products');
    } catch (err) {
        console.error('Error inserting products:', err)
    }
    
};