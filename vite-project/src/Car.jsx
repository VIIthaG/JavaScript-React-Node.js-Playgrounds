import { useState } from "react";
function Car (){

    const inp = document.getElementById("in").value
    console.log(inp)
    const [car,setCar]= useState({year: "2001",make : "Ford", model:"Mustang"})


    function handleYearChange(e){
        
        setCar((element)=>({...element, year: e.target.value}))
    }
    function handleMakeChange(e){
        setCar(element=>({...element, make:e.target.value}))
    }
    function handleModelChange(e){
        setCar(element=>({...element,model:e.target.value}))
    }
    return(

            <div>
                <p>Your favorite car is the : {car.year} {car.make} {car.model}</p>

                <input min="2000" id="in" type="number" onChange={handleYearChange} value={car.year}/><br />
                <input type="text" onChange={handleMakeChange} value={car.make}/><br />
                <input type="text" onChange={handleModelChange} value={car.model}/>
            </div>

    )
}


export default Car