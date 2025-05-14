import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function B(){

    /*const [fruits, setFruits] =useState(["lemon","orange","cucumber","tomato","banana"]);

    function A(){
        const fr= document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value="";         
        setFruits(fruit=> [...fruit,fr]);   

    }

    function C(index){

        setFruits(fruits.map((_, i) => i!==index));

    }

    return(
        <div>

            <h2>Fruits</h2>

            <ul>
                {fruits.map((fruits, index)=><li onClick={()=>C(index)}  key={index}>{fruits}</li>)}

            </ul>
            <input required type="text" id="fruitInput" placeholder="Enter"/><button onClick={A}>add food</button>
        </div>        
    );
}*/

const [count, setCount]  = useState(0);
const[col,setCol]=useState('green');
//useEffect=(()=>{document.title = `count: $(count) $(col)`},[col, count]);

function colpicker(){

       

    setCol(c=> c=== 'green' ? 'red' : 'green');

}


function add_count(){


        setCount(c=>c+1);
}

return(<div className="container">

    <p style={{color:col}}> Count: {count}</p>
    <button  onClick={add_count}> increment </button>
    <button onClick={colpicker}>chnage color</button>


</div> );}

export default B