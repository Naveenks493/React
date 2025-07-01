// import { useState } from "react"

import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";

// function Set() {
//     const [text , setText] = useState("naveen");
//     // console.log(text);
//     const handleupdate=()=>{
//         setText("you have changed the text")
//         console.log("button trigged")
//     }
//     return(
//        <div className="text-center py-50">
//        <h1>{text}</h1>
//        <button onClick={handleupdate}>change</button>
//        </div>
//     )
// }
// export default Set;


function Count() {
    const [count, setCount] = useState(0)
    console.log(count);
    const handlechange = () => {
        setCount(count + 1)
    }
    const handleupdate = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center space-y-4">
            <h1>{count}</h1>
            <button onClick={handlechange} className="border border-amber-300 bg-blue-700 px-4 py-2 rounded text-white">Increment button</button>
            <button onClick={handleupdate} className="border border-amber-700 bg-green-500 px-4 py-2 rounded  text-white">Decrement button</button>
            <button onClick={reset} className="border border-amber-700 bg-red-500 px-4 py-2 rounded  text-white">Reset</button>
        </div>
    )
}
export default Count;