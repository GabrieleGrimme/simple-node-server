//products.controller.js

import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { saveToDb } from '../lib/databaseHelpers.js';
import { loadFromDatabase } from './lib/databaseHelpers.js';

function postProduct(request, response) {

    const newProduct = { ...request.body, id: uuidv4() };

    fs.readFile('db.json', (error, fileContents) => {
        if (error) {
            console.error(error.message);
            response.json({
                success: false,
                message: 'Cannot open database.'
            });
        }

        const database = JSON.parse(fileContents);

        const products = database.products;

        products.push(newProduct);

        saveToDb(database); //fire and forget
        response.json(newProduct); //reply to the client with new added product
    });
}

function getProducts(request, response) {
const database = loadFromDatabase();

        response.JSON(database.products);
    };
    return false;
}

function productForm(request, response) {
    response.send(`
        <h1>Add a new product!</h1>
        <form action="/products" method="POST">
        <input type="text" name="productname" placeholder="Product name">
        <input type="text" name="amount" placeholder="Amount">
        <input type="text" name="price" placeholder="Price">
        <input type="text" name="color" placeholder="Color">
        <button>Add product</button>
        </form>
        <a href="/customer">Back to customer!</a>
        `);
    };


export { productForm, postProduct, getProducts };
