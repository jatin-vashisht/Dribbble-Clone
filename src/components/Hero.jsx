import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {cards} from '../data'

const Hero = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((i) => i !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const handleFinishClick = () => {
    navigate('/')
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFinishClick();
    }
  };

  const navigate = useNavigate();

  return (
    <div className="py-4 w-screen h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between md:justify-start mb-8">
        <img src="logo.png" alt="Logo" className="h-8 mr-4" />
        <Link
          to="/profile"
          className="bg-gray-100 hover:bg-gray-300 text-gray-500 font-bold text-lg py-2 px-4 rounded"
        >
          &lt;
        </Link>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-48 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          What brings you to dribbble?
        </h1>
        <p className="text-gray-500 mb-20">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[60%] md:w-[100%] xl:h-[35vh] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-end items-center bg-white border border-gray-200 rounded-lg pt-4 ${selectedCards.includes(index)? 'md:pt-12' : 'md:pt-4'} px-5 pb-4 cursor-pointer ${
                selectedCards.includes(index)
                  ? "border-2 border-pink-500 transform"
                  : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`mb-4 transition-all duration-500 ${
                  selectedCards.includes(index)
                    ? "md:absolute md:-translate-y-[150%] lg:-translate-y-[200%] xl:-translate-y-[50%]"
                    : ""
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="mix-blend-multiply"
                />
              </div>
              <h2 className="text-lg font-bold mb-2 leading-5">{card.title}</h2>
              {selectedCards.includes(index) && (
                <div className="">
                  <p className="text-sm text-gray-600 mb-2">
                    {card.description}
                  </p>
                </div>
              )}
              <div className={`w-6 h-6 border-2 border-gray-500 rounded-full ${selectedCards.includes(index) && 'bg-pink-500 border-0 text-white'}`}>
                {selectedCards.includes(index) && '✔'}
              </div>
            </div>
          ))}
        </div>
        <p className="font-bold mt-12 mb-4">
          Anything else? You can select multiple
        </p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <button
            onClick={handleFinishClick}
            onKeyPress={handleKeyPress}
            className={`${selectedCards.length === 0? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-600'} text-white py-2 px-20 rounded-lg mr-4`}
            disabled={selectedCards.length === 0}
          >
            {selectedCards.length === 0 ? 'Select atleast one' : 'Finish'}
          </button>
          <p className="text-sm text-gray-400 font-bold">or Press RETURN</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

