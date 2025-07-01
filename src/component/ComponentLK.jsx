import image from "../assets/image.png";
import { useState } from "react";

// import { useState } from "react"

export const Card = ({id, image, name, email,handleDelete }) => {
  console.log("render")
  return (
    <div className="border border-blue-300 bg-blue-100 rounded p-3 space-y-3">
      <img src={image} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button className="px-4 py-1.5 bg-green-500 rounded text-white "
      onClick={()=>handleDelete(id)}
      >
          Delete
        </button>
    </div>
  );
};

const List = () => {
  const data = [
    { id: 1, name: "Sonu", email: "sonu@gmail.com", image },
    { id: 2, name: "bhai", email: "bhai@gmail.com", image},
    { id: 3, name: "ragul", email: "ragul@gmail.com", image },
    { id: 4, name: "vk", email: "vk@gmail.com", image },
    { id: 5, name: "msd", email: "msd@gmail.com", image },
  ];

  const [list, setList] = useState(data);
  const handleDelete = (id) => {
    const filteredData = list.filter((value) => value.id !== id);
    setList(filteredData);
  };
  return (
    <div className="w-full min-h-screen flex flex-col p-5 gap-5">
      <div className="w-full grid grid-cols-4 gap-5">
        {list.map((value) => (
          <Card
            key={value.id}
            id={value.id}
            image={value.image}
            name={value.name}
            email={value.email}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;


// import image from "../assets/image.png";
// import { useState } from "react";

// export const Card = ({ id, image, name, email, list, setList }) => {
//   console.log("render");

//   const handleDelete = () => {
//     const filteredData = list.filter((value) => value.id !== id);
//     setList(filteredData);
//   };

//   return (
//     <div className="border border-blue-300 bg-blue-100 rounded p-3 space-y-3">
//       <img src={image} />
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <button
//         className="px-4 py-1.5 bg-green-500 rounded text-white"
//         onClick={handleDelete}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };
// const List = () => {
//   const data = [
//     { id: 1, name: "Sonu", email: "sonu@gmail.com", image },
//     { id: 2, name: "bhai", email: "bhai@gmail.com", image },
//     { id: 3, name: "ragul", email: "ragul@gmail.com", image },
//     { id: 4, name: "vk", email: "vk@gmail.com", image },
//     { id: 5, name: "msd", email: "msd@gmail.com", image },
//   ];

//   const [list, setList] = useState(data);

//   return (
//     <div className="w-full min-h-screen flex flex-col p-5 gap-5">
//       <div className="w-full grid grid-cols-4 gap-5">
//         {list.map((value) => (
//           <Card
//             key={value.id}
//             id={value.id}
//             image={value.image}
//             name={value.name}
//             email={value.email}
//             list={list}
//             setList={setList}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;




// const MemoExample=()=>{
//   const [count,setCount]=useState(0);

//   const increment =()=>{
//     setCount((count)=>count+1);
//     setCount((count)=>count+1);
//     setCount((count)=>count+1);
//     setCount((count)=>count+1);
//   }
//   return(
//     <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
//       <p>{count}</p>
//       <button onClick={increment}>increment</button>
//     </div>
//   )
// }
// export default MemoExample;




































// mounting is the process of creating a component in dom
// updating is the process of update the component once the state or props changed into the dom
// component is deleted from the dom -unmounting