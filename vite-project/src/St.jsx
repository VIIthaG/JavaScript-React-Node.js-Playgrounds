import { useState } from "react";
import { useEffect } from "react";


function St() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(

        () => {
            window.addEventListener("resize", handleResize)

            return () =>{

                window.removeEventListener("resize",handleResize)
            }
        
        
        }
        , [width, height]


    )

    useEffect(

        ()=>{document.title=`size :${width} x ${height}`},[width, height]
    )


    function handleResize() {

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    return (
        <div>
            <p >
                {width}px
            </p>
            <p>
                {height}px
            </p>

        </div>


    )
}

export default St