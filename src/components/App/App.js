import React from "react";
import Manatee from "../Manatee/Manatee";
import Narwhal from "../Narwhal/Narwhal";
import Whale from "../Whale/Whale";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
// ===============================================================
// imagine state,action as an obj
// const counterReducer = (state={value:1},action)=>{
//   if(action.type ==='counter/increment'){
//     return{
//       ...state,value:state.value+1
//     }
//   }
//   else if(action.type ==='counter/decrement'){
//     return{
//       ...state,value:state.value-1
//     }
//   }
//   return state;
// }
// // these functions returns objects only with type value set
// const increment=()=>{
//   return{
//     type:'counter/increment'
//   }
// }
// const decrement=()=>{
//   return{
//     type:'counter/decrement'
//   }
// }

// const store = configureStore({reducer:counterReducer});
// console.log('current state',store.getState());
// store.dispatch(increment());
// console.log('current state',store.getState());
// store.dispatch(decrement());
// console.log('current state',store.getState());

// const selectCounterValue = state =>state.value;
// console.log("using selector",selectCounterValue(store.getState()));
// ===============================================================

function App() {
  // /reducer functions update/return states
  const counterReducer = (state={value:1},action)=>{
    if(action.type ==='counter/increment'){
      return{
        ...state,
        value:state.value+1
      }
    }
    else if(action.type ==='counter/decrement'){
      return{
        ...state,
        value:state.value-1
      }
    }
    return state;
  }
  // action functions returns objects only with type value set
  const increment=()=>{
    return{
      type:'counter/increment'
    }
  }
  const decrement=()=>{
    return{
      type:'counter/decrement'
    }
  }
  const store = configureStore({reducer:counterReducer});
  const selectCounterValue = state =>state.value;
  const currentValue = selectCounterValue(store.getState())
  console.log(currentValue,"currentValue")

  return (
    // <div className="wrapper">
    //   <h1>Marine Mammals</h1>
    //   <BrowserRouter>
    //   <nav>
    //     <ul>
    //       <li><Link to="/manatee">Manatee</Link></li>
    //       <li><Link to="/narwhal">Narwhal</Link></li>
    //       <li><Link to="/whale">Whale</Link></li>
    //     </ul>
    //   </nav>
    //     <Routes>
    //       <Route path="/manatee" element={<Manatee />}>
    //       </Route>
    //       <Route path="/narwhal" element={<Narwhal />}>
    //       </Route>
    //       <Route path="/whale" element={<Whale />}>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <>
      <Provider store={store}>
      <button onClick={()=>{store.dispatch(increment());console.log(store.getState().value)}}>+</button>
      <button onClick={()=>{store.dispatch(decrement());console.log(store.getState().value)}}>-</button>
      <div className="display">{store.getState().value}</div>
      </Provider>
    </>

  );
}
export default App;
