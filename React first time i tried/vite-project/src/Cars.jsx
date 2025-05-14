import React from "react";
import { useState } from "react";

function Cars(){
    const[cars, setCars] = useState([]);
    const[make, setMake]= useState(new Date().getFullYear());
    const[yr, setYear]= useState("");
    const[mod, setModel]= useState("");


    function add_to_cars(){
            const entry={year: yr ,make: make , model: mod };


            setCars(c=>[...c, entry]);
            setMake("");
            setModel("");
            setYear(new Date().getFullYear());

    }
    function remove_from_cars(index){
            setCars(c=>(c.filter(car, i)=> i!==index ));

    } 
    function handlemake(event){
        setMake(event.target.value);
    } 
    function handleyear(event){
        setYear(event.target.value);
    } 
    function handlemodel(event){
        setModel(event.target.value);
    }



    return(
        <div>
                <h2>Cars</h2>
                <ul>
                    {cars.map((car, index)=> <li onClick={()=> remove_from_cars(index)} key={index}>{car.make} {car.year} {car.model}</li>)}
                </ul>
                <input type="text" placeholder="Enter" id="makeid" onChange={handlemake}/><br />
                <input type="number"  placeholder="Enter" id="numbid" onChange={handleyear}/><br />
                <input type="text" placeholder="Enter" id="modelid" onChange={handlemodel}/><br />
                <button onClick={add_to_cars}>Enter Options</button>


        </div>
    );
}

export default Cars