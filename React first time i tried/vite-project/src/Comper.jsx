import React, { useState } from 'react';

function Comper() {
  const [tex, setTex] = useState("Enter information");
  const [qty, setQty] = useState(0);
  const [desc, setDesc] = useState("");
  const [sel, setSel]= useState();
 const[rad, setRad] =useState();

  function A(event) {
    setTex(event.target.value);  
  }

  function B(event) {
    setQty(event.target.value);  
  }

  function C(event) {
    setDesc(event.target.value);  
  }

    function D(event){
        setSel(event.target.value);
    }

    function E(event){

        {
            setRad(event.target.value);

        }
    }

  return (
    <div>
      <input value={tex} onChange={A} />
      <p>Name: {tex}</p>

      <input value={qty} onChange={B} type="number" />
      <p>Num: {qty}</p>

      <textarea value={desc} onChange={C} placeholder="Enter Something Here" />
    <br/>
    <br/>

    <select value={sel} onChange={D} >
    <option value="option 1">option 1</option>
    <option value="option 2">option 2</option>
    <option value="option 3">option 3</option>
    </select>
    <p>Selection: {sel}</p>

   <label>
    <input  value="pickup" type= "radio" checked={rad==="pickup"} onChange= {E}>
    </input>
    Pickup
   </label>

   <br/>

   <label>
    <input value="delivery" type= "radio" checked= {rad==="delivery"} onChange= {E}>
    </input>
    Delivery
   </label>
    <p> Selected: {rad}</p>
    </div>
  );
}

export default Comper
