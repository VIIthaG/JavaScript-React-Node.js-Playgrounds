import React, {useState} from 'react'

function Picker(){

            const[color,  setColor]= useState("#FFFFFF");

            function A(event){

                    setColor(event.target.value);
            }

            

    return(

            <div className ="col-picker-container">
                <h1> Colour Picker</h1>

                <div className="bg-col" style={{ backgroundColor : color}}>
                <p>Selected Colour: {color}</p>
                </div>

                <div>
                <label>Select a Colour:</label>
                <input type="color" value={color} onChange={A}></input>
                </div>
                



            </div>

    );
}

export default Picker