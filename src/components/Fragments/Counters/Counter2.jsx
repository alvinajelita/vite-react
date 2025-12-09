import { useState, useEffect } from "react";
 const Counter2 = () => {
    const [counter, setCounter] = useState(1);
    const handleplus = () => {
        if (counter >= 10) {
            setCounter(1);
        } else {
            setCounter(counter + 1);
        }
    }
    const handleminus = () =>{
        if (counter <= 1) {
            setCounter(1);
        }else{
            setCounter(counter - 1);
        }
    }
    useEffect(() => {
        // setCounter(5);
        console.log("counter" , counter);
    }, [counter]);
    return (
        <>
        <h3 className="font-Latoblack">contoh function component lifecycle</h3>
        <div className="flex translate-x-10"></div>
        <div className="capitalize flex space-x-2">
        <button className="bg-orange-950 text-white rounded-lg px-2"
        onClick={handleminus}>-</button>
        <div>{counter}</div>
        <button className="bg-orange-950 text-white rounded-lg px-2"
        onClick={handleplus}>+</button>
        </div>
        </>
    );
}

export default Counter2 ;