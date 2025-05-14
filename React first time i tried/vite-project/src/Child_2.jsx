import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Child_3 from "./Child_3";

function Child_2(props){
         
    return(<div className="box">
        <h3>second child

            <Child_3 id={props.user}/>
        </h3>
    </div> );

}

export default Child_2