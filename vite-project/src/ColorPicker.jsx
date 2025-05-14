import  {useState} from "react";
import './CP.css'

function ColorPicker(){

      
    const [color,setColor]= useState(" ... ");

    function PickColor(e){
        setColor(e.target.value)

    }

    return(
        <div className="p">
                <h1>Color Picker</h1>
                <div className="BigBox" style={{backgroundColor: color}} >
                <p>Selected Color: &nbsp;</p> 
                <p>{color}</p>
                </div>

                <h3>Select a Color !</h3>
                <input type="color" value={color} onChange={PickColor}/>



        </div>

    )


}

export default ColorPicker