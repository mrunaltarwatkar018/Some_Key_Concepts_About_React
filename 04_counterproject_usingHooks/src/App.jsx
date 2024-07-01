import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);


  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(() => {}); // setCounter gives call back 
    // setCounter((prevCounter) => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }


  return (
    <>
      <h1> Mrunals Counter</h1>
      
      <h2>Counter Value: {counter} </h2>

      <button
        onClick={addValue}
      >Increment Value {counter} </button>

      <br></br>
      <br></br>

      <button
        onClick={removeValue}
        disabled={counter === 0}
      >Decrement Value {counter} </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App;
























// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [counter, setCounter] = useState(15);


//   // let counter = 15;

//   const addValue = () => {
//     console.log("clicked", counter);
//     // counter = counter + 1;
//     setCounter(counter + 1)
//   }

//   const removeValue = () => {
//     console.log("Value Removed", counter);
//     // counter = counter - 1;
//     setCounter(counter - 1);
//   }


//   return (
//     <>
//       <h1> Mrunals Counter</h1>
//       <h2>Counter Value: {counter} </h2>
//       <button
//         onClick={addValue}
//       >Add Value {counter} </button>
//       <br></br>
//       <br></br>
//       <button
//         onClick={removeValue}
//       >Remove Value {counter} </button>

//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App
