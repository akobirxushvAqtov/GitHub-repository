import React from 'react'

export default function App() {
  return (
    <div>
      fgfgfg
    </div>
  )
}


























// import React from 'react';
// import Posts from './component2/Posts';
// import Post from './component2/Post';
// import EditPost from './component2/EditPost';
// import {Routes, Route, Link} from 'react-router-dom'

// export default function App() {
//   return (
//     <div>
//       <Link to={'/'}>all posts</Link>
//         <Routes>
//         <Route path='/' element={<Posts />}/>      
//          <Route path='/:id' element={<Post />}/>      
//         <Route path='/:id/edit' element={<EditPost />}/>      
//         </Routes>
//     </div>
//   )
// }










// import { getValue } from '@testing-library/user-event/dist/utils';
// import React, { createContext } from 'react'
// import { useState, useReducer} from 'react'
// // import { action } from 'react-dom/test-utils';
// import Component1 from './components/Component1';
// import Component4 from './components/Component4';

// export const Context = createContext();


// const initialValue = {
//     count: 303,
//     value: 'esfcse'
// }
// export default function App() {
//     const [inputValue, setInputValue] = useState('');

//     const [value, dispatch] = useReducer((state, action) => {

//         switch (action.type) {
//             case "INCREMENT_COUNT" :
//                 return{
//                     ...state, 
//                     count: state.count + 1
//                 }
//             case "DECREMENT_COUNT" :
//                 return{
//                     ...state, 
//                     count: state.count - 1
//                 }
//             case "RESET_COUNT":
//                 return {
//                     ...state,
//                     count: action.payload
//                 }
//             case "CHANGE_VALUE":
//                 return {
//                     ...state,
//                     value: action.payload
//                 }

//                 default: return state
//         }

    
//     }, initialValue);

//     const addCount = () =>{
//         dispatch({ type: "INCREMENT_COUNT"  });
//     }

//     const decCount = () => {
//         dispatch({ type: "DECREMENT_COUNT"});
//     }

//     const resetCount = newCount => {
//         dispatch({ type: "RESET_COUNT", payload: newCount})
//     }

//     const changeValue = (value) => {
//         dispatch({ type: "CHANGE_VALUE", payload: value})
//     }


//     initialValue.addCount = addCount
//     initialValue.decCount = decCount
//     initialValue.resetCount = resetCount
//     initialValue.changeValue = changeValue

//     return (
//         <Context.Provider value={value}>
//             <Component1/>
//         </Context.Provider>
// )
// }











// <Context.Provider value={{count}}>
//     <div>
//         <Component1 count={count}/>
//     </div>
// </Context.Provider>






















    // import logo from './logo.svg';
    // import './App.css';
    // import {Routes, Route, Link} from 'react-router-dom';
    // import Posts from './components/Posts';
    // import Post from './components/Post';
    // import Loader from './components/loader';
    // import Users from './components/Users';
    // import User from './components/User';
    // import UserPosts from './components/UserPosts';
    
    
    // function App() {
    
    
    //     return (
    //         <div>
    //             <div>
    //                 <Link to='/Users'>Users</Link>
    //                 <br/>
    //             </div>
    //             <Routes>
    //                 <Route path={'/posts'} element={<Posts/>} />
    //                 <Route path={'/posts/:id'} element={<Post/>} />
    //                 <Route path={'/users'} element={<Users/>}/>
    //                 <Route path={'/users/:id'} element={<User/>}/>
    //                 <Route path={'/users/:id/posts'} element={<UserPosts/>}/>
    //             </Routes>
                
    //         </div>
    //     )
    // }
    // export default App