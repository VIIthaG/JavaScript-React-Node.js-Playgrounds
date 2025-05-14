import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userconst } from "./Drill.jsx";

function Child_3(props){
         const user= useContext(userconst);
    return(<div className="box">
        <h4>third {props.user} {user}</h4>
    </div> );

}

export default Child_3