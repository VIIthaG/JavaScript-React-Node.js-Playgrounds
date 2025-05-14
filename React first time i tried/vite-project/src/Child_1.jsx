import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import Child_2 from "./Child_2";

function Child_1(props){

    
         
    return(<div className="box">
        <h2>first child 
            <Child_2 id={props.user}/>
            
        </h2>
    </div> );

}

export default Child_1