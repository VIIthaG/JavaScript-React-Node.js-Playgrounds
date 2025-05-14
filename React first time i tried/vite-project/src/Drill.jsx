import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
export const userconst= createContext();
import Child_1 from "./Child_1";

function Drill(){
         
    const[user, setUser] = useState("VIIthaG");
    return(<div className="box">
        <h1>Parent {user}
        <userconst.Provider value={user}>

            <Child_1 id={user}/>
         </userconst.Provider>
        </h1>
    </div> );

}

export default Drill