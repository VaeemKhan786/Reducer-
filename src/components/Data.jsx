import React from "react";
import { useDataContext } from "./context/Context";

export default function Data() {
  const { name, setName, number, setNumber, AddData, data, DeleteData, UpdateData,indexVal } = useDataContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Your Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={AddData}>{indexVal ? "Updata ":"Add data" }</button>

      {data.map((item, index) => (
        <div key={index}>
          <h1>Name: {item.name}</h1>
          <h1>Number: {item.number}</h1>
          <button onClick={()=>DeleteData(index)}>Delete</button>
          <button onClick={()=>UpdateData(index)}>Update</button>
        </div>
      ))}
    </div>
  );
}
