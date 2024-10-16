import { useState } from 'react';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

function App() {
    const [shoppingListItems, setShoppingListItems] = useState({})

    // Yep, we can pass functions as props!
    const generateList = (listItems) => {
        setShoppingListItems(listItems)
     };

    return (
        <>
            <h1>Time to go Shopping</h1>
            <ShoppingForm generateList={generateList} />
            <ShoppingList items={shoppingListItems}/>
        </>
    );
}

export default App;
