import { useState } from "react";

function ToDo() {

    const [task, setTask] = useState(['Get Up', 'Cook', 'Clean'])
    const [newTask, setnewTask] = useState("")

    function handleInputChange(event) {
        setnewTask(event.target.value)

    }

    function addTask() { 
        if(!task.includes(newTask)&& newTask.trim()!=="")
        setTask(t=>[...t,newTask] )
        setnewTask("")
    }

    function delTask(index) { 
        setTask(t=> t.filter((_,i)=>{ return i!==index}))
    }


    function moveUp(index) { 
        const temparr = [...task]
        if(index >0 && index< temparr.length-1){
        [temparr[index],temparr[index+1]]=  [temparr[index +1],temparr[index]] 
        setTask(temparr)
    }}

    function moveDown(index) { 

        const temparr = [...task]
        if(index< temparr.length-1 && index >0 ){
            [temparr[index],temparr[index-1]]=  [temparr[index -1],temparr[index]] 
            setTask(temparr)

        }
    }


    return (<>
        <div className="ToDo" >

            <h1 style={{display:"flex",justifyContent:"center", alignItems:"center"}}>To-Do-List</h1>

         <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <input type="text" placeholder="Enter a Task ..." value={newTask} id="newTask" onChange={handleInputChange}  />
                <button onClick={addTask} className="addButton" style={{ margin: "10px" }}>Add</button>
            
                </div>
        </div>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <ol>{
            task.map((element, index) => {
                return (<li key={index}>
                    <button onClick={()=>moveUp(index)}>Up</button>
                    <button onClick={()=>moveDown(index)}>down</button>

                        &nbsp; {element.length>=1? element : <h2>Enter Something</h2>}  &nbsp;

                    <button>Edit</button>
                    <button onClick={()=>delTask(index)}>delete</button></li>)
            })
        }</ol>
        </div>




    </>)
}

export default ToDo