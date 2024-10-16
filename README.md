# React Shopping List Exercise Solution

## App Architecture

`App.jsx` Component

- Loads both shopping related components
- Stores `shoppingListItems` in its state
  - Initial state is an empty object: `{}`
- Has a function called `generateList` to update `shoppingListItems`

`ShoppingForm` Component

- Take a function called `generateList` as a prop
- Stores an object with all of the items from the inputs
  - Initial state is an object containing keys that correspond to your inputs,
  - eg. `const [myList, setMyList] = useState({ firstGroceryItem: '' })`
- Inputs are bound to the items in the obect and named accordinly
  - eg. `<input type='text' name='firstGroceryItem' value={myList.firstGroceryItem}/>`
- Start with a _single_ input and then add more once that works
- Clicking the `button` triggers the `generateList`
  - :exclamation: Remember, this function is passed down via `props`
  - This will send the updated array of items to the `App.jsx` component

`ShoppingList`

- Takes a prop called `items`
- If there are items in the `items`object, render a `<ul>` with each item in an `<li>`
- :star: Level up: Conditionally render the `<li>` so it's only rendered if the item is not blank

## User Interface

- A user fills out the form in the `ShoppingForm` component
- The user clicks the "Make My List" button
- Items from the form populate inside the `ShoppingList` component

## Hints

- You'll want to use controlled inputs!
- Start with a _single_ input, then work on adding more
- You'll want to `useState` to keep track of what the user adds to their list.

---

As always this is _a_ solution, but not necessarily _the_ solution.
You're solution will likely look different.
