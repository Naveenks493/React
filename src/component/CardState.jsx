import image from "../assets/image.png"
import images from "../assets/email.png"

import  { useState } from "react";

function Card() {
  const [cardData, setCardData] = useState({
    title: "Robert",
    description: "Full Stack Developer.",
    image: image
  });

  const changeCard = () => {
    setCardData({
      title: "E-mail",
      description: "Contact me in mail.",
      image: images
    });
  };

  const reset = () => {
    setCardData({
      title: "robert",
      description: "full stack developer.",
      image: image
    });
  };

  return (
    <div className="max-w-sm mx-auto bg-white  rounded-2xl border border-gray-400">
      <img
        className="w-full h-96 object-cover"
        src={cardData.image}
        alt="Card"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{cardData.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{cardData.description}</p>
       <div className="space-x-4">
         <button
          onClick={changeCard}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Change Card
        </button>
         <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Reset
        </button>
       </div>
      </div>
    </div>
  );
}

export default Card;
