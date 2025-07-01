import { useState } from "react"
import { Link } from "react-router"


const Condition = () => {
    const [condition, setCondition] = useState(true)
    if (!condition) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p>show this paragraph</p>
                <button onClick={() => setCondition(true)}>update</button>
            </div>
        )
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <p>paragraph updated</p>
            <button onClick={() => setCondition(false)}>change</button>
            <Link to="/List">Navigate</Link>
        </div>
    )
}

const Condition1 = () => {
    const [condition, setCondition] = useState(false)
    if (!condition) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p>show this paragraph</p>
                <button onClick={() => setCondition(true)}>update</button>
            </div>
        )
    }
    else {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p>paragraph updated</p>
                <button onClick={() => setCondition(false)}>change</button>
            </div>
        )
    }
}
const Condition2 = () => {
    const [condition, setCondition] = useState("student")
    switch (condition) {
        case "admin":
            return (
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <p>admin dashboard</p>
                    <button onClick={() => setCondition("student")}>update</button>
                </div>
            )
            case "faculty":
            return (
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <p>faculty dashboard</p>
                    <button onClick={() => setCondition("admin")}>update</button>
                </div>
            )
            case "student":
            return (
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <p>student dashboard</p>
                    <button onClick={() => setCondition("faculty")}>update</button>
                </div>
            )
    }
}

export default Condition;