import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Clock(){

    const[time, setTime]=useState(new Date());

useEffect(()=>{ const IntervalID = setInterval(() =>{ setTime(new Date());},1000);return ()=> {clearInterval(IntervalID)}
},[]);


        function formatTime(){

            let hours=time.getHours();
            const min = time.getMinutes();
            const sec= time.getSeconds();
            const meridiem = hours> 12? "PM" :"AM";
            hours = hours %12 || 12;
            return '${Padzero(hours)} ${Padzero(min)} ${Padzero(sec)} ${meridiem}';


        }


        function Padzero(number){

            retun (number<10 ? "0": "")+ number;



        }

    return(<div className="container">

            <div className="clock">
                <span>00:00:00</span>

            </div>

           </div> );
}

export default Clock