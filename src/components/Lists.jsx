import React from 'react'

const Lists = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((item, index) => {
          return (
          <li key={`${item}-${index}`}>
            <span> {item} </span>
            {/*Using map to iterate over the fruits array and render each fruit as a list item. Each item is wrapped in a span element for styling purposes.*/}
            <button>Click</button>
          </li>
          );
        })}
      </ul>
    </>
  );
}

export default Lists;
