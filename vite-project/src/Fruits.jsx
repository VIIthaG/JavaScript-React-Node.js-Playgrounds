import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState(["grape", "apple", "orange", "banana"]);
  const [inputValue, setInputValue] = useState(""); // track input value

  // Map fruits to list items
  let fruitList = fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ));

  function addFruits(e) {
    if (inputValue && !fruits.includes(inputValue)) {
      setFruits([...fruits, inputValue]);
      setInputValue(e.target.value=""); // Clear the input after adding
    }
  }

  function delFruits(e) {
    if (inputValue && fruits.includes(inputValue)) {
      setFruits(fruits.filter(fruit => fruit !== inputValue));
      setInputValue(e.target.value=""); // Clear the input after deleting
    }
  }

  return (
    <>
      <h1>Fruits</h1>
      <div>
        <ul>{fruitList}</ul>
        <input
          id="inp"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value
        />
        <button onClick={(e)=>addFruits(e)}>Add</button>
        <button onClick={(e)=>delFruits(e)}>Remove</button>
      </div>
    </>
  );
}

export default Fruits;
