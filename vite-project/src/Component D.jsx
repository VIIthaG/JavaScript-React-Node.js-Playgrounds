import { UserContext } from "./Component A"
import { useContext } from "react"

function ComponentD(props){

    const user= useContext(UserContext)


    return(
        <div className="box" style={{border:"3px solid", padding:"25px"}}>
            <h1>Component D</h1>
            <h1>Hello: {user}</h1>
        </div>
    )
}

export default ComponentD