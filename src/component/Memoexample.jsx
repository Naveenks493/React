import { memo, useState } from "react"
import { Link } from "react-router";


 export const Todos = memo( ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  )
}
);

const Memo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todos 1", "todos 2"]);

    const increment = () => {
        setCount(count+1);
    };

    console.log("parent render")
    return(
        <>
        <Todos todos={todos}/>
        <hr />
        <div>
            Count:{count}
            <button onClick={increment}>+</button>
        </div>
      <Link to="/Website">navigate</Link>
        </>
    )
}

export default Memo;