import React, { useReducer, useState } from 'react'
function Reducer(state,action){
if(action.type==="ADD"){
return state+ 1
}
else if(action.type==="SUB"){
return state - 1
}
else if(action.type==="INPUTADD"){
return state + Number( action.payload)
}
else if(action.type==="INPUTSUM"){
return state - Number( action.payload)
}
else{
    return state
}
}
export default function Counter() {
    const [data,dispach]=useReducer(Reducer,0)
    const [val,setVal]=useState(0)

  return (
    <div>
    <input onChange={(e)=>setVal(e.target.value)} type='text' placeholder='Enter You Value'/>
    <button onClick={()=>dispach({type:"INPUTADD" ,payload:val})} >ADD</button>
    <button onClick={()=>dispach({type:"INPUTSUM" ,payload:val})} >SUB</button>

    <h1>{data}</h1>

    <button onClick={()=>dispach({type:"ADD"})}>ADD</button>
    <button onClick={()=>dispach({type:"SUB"})}>SUB</button>
    </div>
  )
}
