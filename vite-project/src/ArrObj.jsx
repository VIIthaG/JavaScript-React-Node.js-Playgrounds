import { useState } from "react";

function ArrObj() {

    const [cars, setCars] = useState([{ year: 2004, make: "yamaha", model: "niken" }, { year: 2008, make: "toyota", model: " tundra" }])
    const [year,setYear] = useState("2015")
    const [make,setMake]= useState()
    const [model, setModel] = useState()





    function addEntry(){
        if((year && make && model) )
        setCars([...cars,{year: year, make: make, model: model}])
     
    }

    // function removeEntryOnTouch(index){
    //     setCars(temparr=> temparr.filter((_,i)=> i!==index))

    // }

    function removeEntry(){
        setCars(temparr=>temparr.filter((element)=> {return !(element.make ===make&& element.year ===year, element.model===model)}))
    }

    function yrInput(e){

        setYear(e.target.value)
    }

    function makeInput(e){

        setMake(e.target.value)
    }

    function modelInput(e){

        setModel(e.target.value)
    }








    return (<>
    <div style={{backgroundColor:"darkgray" , borderRadius:"20px" ,userSelect:"none"}}>
        <h1 style={{ textAlign: "center", userSelect:"none",fontFamily: "sans-serif" }}>List of car Objects</h1>

        <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
        <div style={{textAlign:"center",display:"flex", justifyContent:"center", backgroundColor:"gray", width:"200px", borderRadius:"20px"}}>
            <ul style={{ marginRight: "30px", textAlign: "center", listStyleType: "none" }}> {cars.map((element, index) => {
                return (

                    <li  key={index}> {element.year} {element.make} {element.model}</li>)
            })}
            </ul>
        </div>

        </div>
        <br/>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div > <input type="number" min="2004" placeholder="Year" value={year} onChange={yrInput}/></div>
            <div style={{margin:"10px"}}> <input placeholder="make" type="text" value={make} onChange={makeInput}/></div>
            <input type="text" placeholder="model" value={model} onChange={modelInput} />

        </div><br />

        <div style={{ textAlign: "center" }}><button onClick={addEntry} >Enter</button> <button onClick={removeEntry}>Remove</button></div>
        </div>
    </>

    );
}

export default ArrObj;
