import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: { 
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google',
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Mrunal"

const reactElement = React.createElement (
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  reactElement
  
)









// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// // const ReactElement = {
// //   type: 'a',
// //   props: { 
// //       href: 'https://www.google.com',
// //       target: '_blank'
// //   },
// //   children: 'Click me to visit google',
// // }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )


// const reactElement = React.createElement (
//   'a',
//   { href: 'https://www.google.com', target: '_blank' },
//   'Click me to visit google',
//   anotherElement
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <App/>
  
// )












// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// // const ReactElement = {
// //   type: 'a',
// //   props: { 
// //       href: 'https://www.google.com',
// //       target: '_blank'
// //   },
// //   children: 'Click me to visit google',
// // }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

// const reactElement = React.createElement (
//   'a',
//   { href: 'https://www.google.com', target: '_blank' },
//   'Click me to visit google'
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactElement
  
// )























// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: { 
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google',
// }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherElement
  
// )












// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: { 
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google',
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//     ReactElement
  
// )













// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>,
  
//     // MyApp()
//     // <App />
//     <MyApp /> // standard one & most precious way

// )
