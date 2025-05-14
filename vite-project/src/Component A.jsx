import { useState } from "react"
import ComponentB from "./Component B"
import { createContext } from "react"

export const UserContext = createContext();

function ComponentA(props){

    const [user, setUser] =useState("VG")
    return(
        <div className="box" style={{border:"3px solid", padding:"25px"}}>
            <h1>Component A</h1>
            <h2>Hello: {user}</h2>
            <UserContext.Provider value={user}>
            <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA