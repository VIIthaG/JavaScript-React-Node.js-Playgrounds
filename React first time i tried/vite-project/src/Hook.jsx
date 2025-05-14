import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Hook(){

    const [count, setCount]  = useState(0);


    function add_count(){


            setCount=(c=>c+1);
    }

    return(<div className="container">

        <p> Count: {count}</p>
        <button onClick={add_count}> increment </button>


    </div> );
}

export default hook