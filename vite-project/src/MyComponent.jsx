import React,{useState} from "react";

function MyComponent() {

    let [name, setName] = useState("abc")
let [nam, setNam] = useState("");

    const [age,setAge] = useState(1)

    const updateAge =()=>{
        setAge(age +1)
    }

    let [emp, setEmp] = useState(false)
    const updateEmp=()=>{

        setEmp(!emp)
        
    }

    const updateName = ()=>{

        name="VG"
        console.log(name)
        setName(name)
setNam("G")    }
    return (
        <div>
            <p>Name: {nam}</p>
        <button onClick={updateName}> update name </button>


        <p>age : {age}</p>
        <button onClick={updateAge}>update age</button>

        <p>Emp Status : {emp===true? "Employed":"Not Employed"}</p>
        <button onClick={updateEmp}>Change</button>
        </div>


    )
}

export default MyComponent


