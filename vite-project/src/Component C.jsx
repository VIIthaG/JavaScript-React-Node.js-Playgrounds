
import ComponentD from "./Component D"
function ComponentC(props){


    return(
        <div className="box" style={{border:"3px solid", padding:"25px"}}>
            <h1>Component C</h1>
            <ComponentD user={props.user}/>
        </div>
    )
}

export default ComponentC