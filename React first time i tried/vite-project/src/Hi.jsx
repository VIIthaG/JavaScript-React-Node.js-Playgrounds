import React from "react";
import { useState } from "react";

/*function Hi(){

    const [bike,setBike] = useState({year:"2004",make:"Yamaha",model:"R1"});

    function Yr(event){
        setBike(b=>({...bike, year: event.target.value}));


    }

    function Make(event){

            setBike(b=> ({...b,make:event.target.value}))


    }

    function Mod(event){

        setBike(b=>({...b,model:event.target.value}))
    }

    return(
    
        
    <div class="container">
                <h2>Selected Vehicle : {bike.year} {bike.make} {bike.model}</h2>
                <div>
                    <input type="number" value={bike.year} onChange={Yr}/>
                </div>
                <br />
                <div>
                    <input type="text" value={bike.make} onChange={Make}/>
                </div>
        <br />
                <div>
                    <input type="text" value={bike.model} onChange={Mod}/>
                </div>

            </div>);


}
*/



function Hi(){

    const [fruits, setFruits]=useState(["Apple","Mango","Orange","Pear"]);

   
    function A(){

        const newFood = document.getElementById("container").value;
        document.getElementById("container").value="";
        setFruits(fruit=> [...f,newFood]);
    
    }
    function B(index){

        setFruits(fruits.filter((_,i)=>i!==index));




    }


    return(<div className="container">
        <h2>fruits</h2>
             <div>
                <ul>
                {fruits.map((fruit, index)=><li key={index}>{fruit}</li>)}
                        
                </ul>
                <input type="text"id="input" placeholder="Hey there"/><button>Add to list</button>
            </div>



    </div>);
}
 export default Hi