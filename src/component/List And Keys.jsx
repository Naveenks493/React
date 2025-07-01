import { useState } from "react";
import images from "../assets/image.png"
import photo from "../assets/email.png"
import { Link } from "react-router";
const List = () => {
  const data=[
    { id: 1, name: "babu", email: "babu@gmail.com",address:"chennai",image:images},
    { id: 2, name: "damu", email: "damu@gmail.com",address:"chennai",image:images},
    { id: 3, name: "Dinu", email: "dinu@gmail.com",address:"chennai",image:images},
    { id: 4, name: "menu", email: "menu@gmail.com",address:"chennai",image:images},
    { id: 5, name: "kanu", email: "kanu@gmail.com",address:"chennai",image:images},
  ] 
  return (
    <div className="min-h-screen  py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-4xl  border border-white p-6 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <img src={user.image} alt="image" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Name:{user.name}</h2>
              <p className="text-sm text-gray-600">E-mail:{user.email}</p>
              <p className="text-sm text-gray-600">Address:{user.address}</p>
            </div>
            <button
              onClick={() => handleDelete(user.id)}
              className="mt-6 bg-black text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        ))}
        <Link to="/Memo">Navigate</Link>
      </div>
    </div>
  );
};

export default List;
