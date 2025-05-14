import ComponentC from "./Component C"

function ComponentB(props){


    return(
        <div className="box" style={{border:"3px solid", padding:"25px"}}>
            <h1>Component B</h1>

            <ComponentC />
        </div>
    )
}

export default ComponentB