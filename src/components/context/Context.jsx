import React, { createContext, useContext, useReducer, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data, dispatch] = useReducer(reducer,[]);
  const [indexVal, setIndexVal] = useState(null);

  function AddData() {

 if(indexVal !== null){
dispatch({type:"UPDATA DATA",index:indexVal,payload:{name,number}})
setIndexVal(null);
 }
 else{
    dispatch({type:"ADD DATA",payload:{name,number}} )
 }

   setName("");
   setNumber("");
  }

  function DeleteData(index){
    dispatch({ type: "DELETE DATA", index });

  }
  function UpdateData(index){
const AllData=data[index]

setName(AllData.name)
setNumber(AllData.number)
    setIndexVal(index)
  }
  return (
    <DataContext.Provider value={{ name, setName, number, setNumber,AddData,data,DeleteData,UpdateData,indexVal }}>
      {children}
    </DataContext.Provider>
  );
};

function reducer(state,action){
switch (action.type) {
    case "ADD DATA":
        return [...state,action.payload]

       case "DELETE DATA": return state.filter((_,i)=>i !==action.index) 
       case "UPDATA DATA": return  state.map((item,index)=>index===action.index ? action.payload:item)
    default:
        break;
}
}