import { useState } from "react"
import './Counter.css'

function Counter (){
const [c, setC] = useState(0)

const add = ()=>{

    setC(c +1)
}


const sub = ()=>{
    if(!c<=0){
    setC(c -1)}
}


const reset = ()=>{

    setC(c -c)
}




    return(
           < div>
                <div className="class">
                {c}
               </div> <br/><br/>
               <div className="buttons">

               <button onClick={()=>add()}>add</button>
               <button onClick={()=>sub()}> subtract</button>
               <button onClick={()=>reset()}>reset</button>
            </div>
            </div>


    )
}







export default Counter