import React from 'react'

const ArrayMethods = () => {
  //logic

  //1. Callbacks;

  //function inner(){
    //console.log("I am inner function");
  //}

  //function outer(){
  //  inner();
  //  console.log("I am outer function");
  //  innerRef();
  //}

  //outer(inner); //I am outer function, then I am inner function
  //outer is a HOF (Higher Order Function)
  //inner is the callback function in line 18

  //2. Map method -> to perform a specific operation on each element of the array and return a new array with the results

  //3. More generalised method -> where cb performs the given task
   const arr1 = [1,2,3,4];
  function map(arr1,cb){ //cb is the callback dunction: the operation to perform on each element
    let newArr=[];
    for(let i=0;i<arr1.length;i++){
      newArr.push(cb(arr1[i]));
    }
    return newArr;
  }

  const doubleNum = (val) => {
    return val * 2;
  }
  console.log(map(arr1,doubleNum));

  const cubeNum = (val) => {
    return val * val * val;
  }

  const sqNum = (val) => {
    return val * val;
  }
  console.log("Generalised map function", map(arr1,doubleNum));
  console.log("Generalised map function cube", map(arr1,cubeNum));
  console.log("Generalised map function square", map(arr1,sqNum));

  //4. Inbuilt map function (as an Array Method)

  function triple(ele){
    return ele * 3;
  }

  const tripleArr = arr1.map(triple);
  console.log("triple through map", tripleArr);

  //5. Filter

  const isEven = (num) => {
    return num % 2 === 0;
  }

  const filteredArr = arr1.filter(isEven);
  console.log("Even numbers", filteredArr);

  return (
   <>
   <div>
      <h2>Array Methods</h2>
    </div>
   </> 
  )
}

export default ArrayMethods;
