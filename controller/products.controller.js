//products.controller.js

import { v4 as uuidv4 } from 'uuid';
import { loadFromDatabase, saveToDatabase } from './lib/databaseHelpers.js';

function postProduct(request, response) {
    const newProduct = { ...request.body, id: uuidv4() };

    const database = loadFromDatabase();
    const products = database.products;

    products.push(newProduct);

    saveToDatabase(database);

    response.json(newProduct);
}

function getProducts(request, response) {
    const database = loadFromDatabase();
    response.JSON(database.products);
};

function getProduct() {
    const { productId } = request.params;

    const database = loadFromDatabase();
    const products = database.products;

    const product = products.find((product) => product.id === productId);

    if (product) {
        response.json(product);
    } else {
        response.json({ message: 'Product with id ' + productId + ' not found.'});
    }
}

export { getProduct, getProducts, postProduct };
