import React, {useState} from "react";
import Number from './components/Number'
import Button from './components/Button'

function CounterContainer(props){
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(false)
    const disabled = count <= 0

    function handleAdd(){
        setCount(count+1)
        setMessage(false)
    }

    function handleSubs(){
        setCount(count-1)
        if(count === 1){
            setMessage(true)
        }
    }

    return (
        <div className="container">
            <h1>Contador</h1>
            <Button handleClick={handleSubs} symbol={"-"} disabled={disabled}/>
            <Number number={count}/>
            <Button handleClick={handleAdd} symbol={"+"}/>
            {message && <p>El numero no puede ser menor a 0</p>}
        </div>
    )
}

export default CounterContainer;