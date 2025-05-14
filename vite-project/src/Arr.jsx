import { useState } from "react";
function Arr() {

   const [arr,setArr]= useState(['cat','mouse','donkey','ape','dog','bird','fish'])
    let newArr = arr.map((element,index) =>{ return <li key={index}> {element}</li>  })


    function add(){
        
        const inp = document.getElementById("in").value

        if(inp !=="" && !arr.includes(inp)){
        setArr([...arr,inp])
        }
        // document.getElementById("in").value=""

    }

    function sub(index){


        setArr(arr.filter(i=>

            i!== index
    
    ))
    }
        





    return (
    <>
    <h2>List of foods</h2>
        <ul>{newArr}</ul>
        <input id="in"  type="text" placeholder="Enter " />
        <button onClick={add}>Add</button>
        <button onClick={sub(index)}>Remove</button>

    </>)
}

export default Arr