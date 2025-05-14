import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function Re(){

    const val = useRef(null);

    useEffect(()=>{console.log("")},[]);

    function inc(){

        val.current++
        val.current.style.backgroundColor = "yellow";

    }


    return( <div className="container">

            <button  oonClick={inc}>
                click
            </button>
            <input type="text" name="" id="" ref={val} />

    </div> );
}

export default Re