import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
function Stopper(){

    const[tickstate, setTickstate]= useState(false);
    const[delta, setDelta]= useState(0);

    const intereval =  useRef(null);
    const alpha = useRef(0);



    useEffect(()=> {if(tickstate){intereval.current = setInterval(()=>{setDelta(Date.now - alpha.current);},10);}

        return()=>{clearInterval(intereval.current)}},[tickstate])



    function begin(){
        setTickstate(true); 
        alpha.current = c=Date.now() - delta;


    }


    function cease(){
        setTickstate(false);



        
    }
    function reset(){
        setDelta(0);
        setTickstate(false);
    }


    function format(){
        let hours = Math.floor(delta / (1000 *60*60));
        let minutes = Math.floor(delta / (1000 *60)%60);
        let seconds = Math.floor(delta / (1000 %60));
        let milliseconds = Math.floor(delta %1000);


        return {hours}, {minutes}, {seconds};

    }

    return(<div className="container">
            <div className="timer"> {format()}</div>
            <div className="controls"><button onClick={begin}>Begin</button></div>
            <div className="controls"><button onClick={cease}>Cease</button></div>
            <div className="controls"><button onClick={reset}>Reset</button></div>


    </div> );
}
export default Stopper