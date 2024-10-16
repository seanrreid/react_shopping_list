/* eslint-disable react/prop-types */
import { useState } from 'react';

const ShoppingForm = ({ generateList }) => {
    // Start with a state object that holds our blank items
    const [groceryItems, setGroceryItems] = useState({
        item1: '',
        item2: '',
        item3: '',
    });

    const handleSubmit = (e) => {
        // We shouldn't need to prevent default...
        // ...but we're going to, just in case
        e.preventDefault();
        generateList(groceryItems);
    };

    // This will control our inputs and save values into state
    const handleChange = (e) => {
        // Destructure the values we want from the input
        const { name, value } = e.target;
        // Update the state object with the changes using: [name]:value
        // This syntax will dynamically update the key that matches the 'name' with new 'value'
        setGroceryItems((currentItems) => ({
            ...currentItems,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Item 1
                <input
                    type='text'
                    name='item1'
                    onChange={handleChange}
                    value={groceryItems.item1}
                />
            </label>
            <label>
                Item 2
                <input
                    type='text'
                    name='item2'
                    onChange={handleChange}
                    value={groceryItems.item2}
                />
            </label>
            <label>
                Item 3
                <input
                    type='text'
                    name='item3'
                    onChange={handleChange}
                    value={groceryItems.item3}
                />
            </label>
            <button type='submit'>Generate List</button>
        </form>
    );
};

export default ShoppingForm;
