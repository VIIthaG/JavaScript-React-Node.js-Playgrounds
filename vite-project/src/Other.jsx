import { useState } from "react";

function Other() {


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState()
    const [comment, setComment] =useState()
    const [payment, setPayment] = useState()
    const[op,setOp] = useState("")


        function handleRadioOptions (event){
            setOp(event.target.value )



        }

    function handlePaymentChange(e){

            setPayment(e.target.value)

    }

    function handleCommentChange(e){

            setComment(e.target.value)
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }


    function handleQuantityChange(e) {


        setQuantity(e.target.value)
    }
    return (

        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <input type="textarea" placeholder="kwdcnwpei" value={comment} onChange={handleCommentChange}/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>

                <option value="" > select an option</option>
                <option value="visa" > visa</option>
                <option value="mastercard" > mastercard</option>
                <option value="giftcard" > giftcard</option>
    
            </select>
                <p>option: {payment}</p>


                <input type="radio"  name="op" value="Pick Up & delivery" id="ji0" onChange={handleRadioOptions}/>
                <label htmlFor="ji0"  checked={op==="Pick Up & delivery"} onChange={handleRadioOptions}  > &nbsp;Pick Up & delivery</label> <br />

                <input type="radio"  name="op" value="Drone Delivery"  id="ji1"  onChange={handleRadioOptions} />
                <label htmlFor="ji1" checked={op==="Drone Delivery"} > &nbsp;Drone Delivery</label> <br />

                <input type="radio"  name="op"  value="Water Shipping" id="ji2" onChange={handleRadioOptions} />
                <label htmlFor="ji2" checked={op==="Water Shipping" } >&nbsp; Water Shipping</label>
                <p>shipping options: {op}</p>

        </div>


    )
}

export default Other