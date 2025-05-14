import { useState, useEffect } from "react";

function Clock() {

    const [time,setTime] = useState(new Date())

    useEffect(
        ()=>{

            const  intervalId = setInterval(() => {setTime(new Date())
                
            }, 1000);

            return ()=>{clearInterval()}

        },[]


    )

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >=12? "PM": "AM"

        hours = hours%12  ||  12

        return `${hours}: ${minutes} :${seconds} ${meridiem}`


    }

    return (<p 
        style={{ 
            color: "GrayText", 
            fontSize: "6rem", 
            textAlign: "center", 
            fontFamily: "mono" }}>
                 
              {formatTime()}</p>)
}

export default Clock