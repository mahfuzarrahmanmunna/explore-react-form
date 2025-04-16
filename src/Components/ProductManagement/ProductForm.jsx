import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {

    const [error, setError] = useState('')

    const handleProductSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value
        // console.log(name, price, quantity)

        if (name.length === 0) {
            setError('Please provide a name.')
            return;
        } else if (price.length === 0) {
            setError('provide a price pls')
            return;
        } else if (price < 0) {
            setError('price cant be negative!')
            return;
        }
        else if (quantity.length === 0) {
            setError('Quantity don"t show you')
            return;
        }
        else {
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct)
        handleAddProduct(newProduct)
    }
    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' /><br />
                <input type="text" name='price' placeholder='Product Price' /><br />
                <input type="text" name='quantity' placeholder='Product Quantity' /><br />
                <input type="submit" value="Submit" />
            </form><br />
            <p style={{ color: 'red' }}>
                {error}
            </p>
        </div>
    );
};

export default ProductForm;