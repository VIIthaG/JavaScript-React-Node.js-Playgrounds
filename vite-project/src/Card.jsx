import pic from './assets/dark-souls.jpg'


    function Card(){
        return(
            <div className="myDiv">
                    <img src={pic}   alt="ds.jpg"  />
                    <h1 className="Title">  Hello </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic beatae possimus nesciunt et sed magnam officiis molestias distinctio eligendi in consectetur autem eos accusamus cum, minima voluptatem eveniet eius illum. </p>

            </div>
        );
    }

export default Card