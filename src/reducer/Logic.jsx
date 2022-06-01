import { useState,useReducer } from "react";
import { initialState,ACTION,Neha,Nehaa } from "./reducer";
export default function MyCounter(){
    const value=0;
    return(
<>
<Counter initialCount={value} />
</>
    )
}


 export function Counter({initialCount}){
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
}



export function CounterMy() {
  const [state, dispatch] = useReducer(Neha, initialState);

  const [state1, Mydispatch] = useReducer(Nehaa,initialState);
const apiCall = ()=>{
    const res = [];
    Mydispatch({type: 'my',data:res})
}

 
  return (
    <>
    <p>{state.arr[0].a}</p>
      Count: {state.count} Limit {state.myLimit}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => Mydispatch({type: 'my'})}>jjj</button>    
    </>
  );
}