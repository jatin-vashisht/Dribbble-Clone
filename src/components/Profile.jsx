import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const Profile = ({avatarImage, setAvatarImage}) => {
  const defaultAvatars = ['def1.png','def2.png','def3.png','def4.png','def5.png']
  const [location, setLocation] = useState("");
  const [showDefault, setShowDefault] = useState(false);
  const navigate = useNavigate();

  const handleAvatarUpload = (e) => {
    setAvatarImage(e.target.files[0]);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleNextClick = () => {
    if(avatarImage === null){
      setAvatarImage(defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)])
    }
    navigate("/interest");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNextClick();
    }
  };

  const handleDefaultAvatar = (src) => {
    setAvatarImage(src);
    setShowDefault(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="md:block md:absolute top-5 left-5 hidden">
          <img src="logo.png" alt="Logo" className="hover:cursor-pointer" />
        </div>
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Welcome! Let's create your profile
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-4 mb-12">
            Let others get to know you better! You can do these later
          </p>
          <h2 className="text-sm font-medium md:text-base md:font-bold lg:text-xl lg:font-extrabold mb-4">
            Add an avatar
          </h2>
          <div className="flex items-start mb-8">
            {avatarImage ? (
              <img
                src={
                  avatarImage.name
                    ? URL.createObjectURL(avatarImage)
                    : avatarImage
                }
                alt="Avatar"
                className="w-28 h-28 md:w-40 md:h-40 rounded-full mr-4"
              />
            ) : (
              <>
                <label
                  htmlFor="avatar"
                  className="py-2 rounded-lg font-medium cursor-pointer"
                >
                  <img
                    src="avatar.png"
                    alt="Avatar"
                    className="w-28 h-28 md:w-40 md:h-40 rounded-full mr-4"
                    htmlFor="avatar"
                  />
                </label>
                <input
                  type="file"
                  id="avatar"
                  className="hidden"
                  onChange={handleAvatarUpload}
                  accept="image/*"
                />
              </>
            )}
            <div className="flex flex-col items-start mt-6 ml-4 gap-4">
              <label
                htmlFor="avatar"
                className="border border-gray-200 py-2 px-4 rounded-lg text-sm font-medium md:text-base md:font-bold cursor-pointer hover:bg-gray-100"
              >
                Choose image
              </label>
              <input
                type="file"
                id="avatar"
                className="hidden"
                onChange={handleAvatarUpload}
                accept="image/*"
              />
              <button
                href="#"
                className="flex items-center gap-1 text-gray-400 text-sm font-normal md:text-base md:font-medium hover:text-gray-600"
                onClick={() => setShowDefault(!showDefault)}
              >
                <FaGreaterThan className="text-xs" /> Or choose one of our
                defaults
              </button>
              {showDefault && (
                <ul className="flex gap-2">
                  {defaultAvatars.map((src) => (
                    <li key={src} className="cursor-pointer">
                      <img
                        src={src}
                        alt="default icon"
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                        onClick={() => handleDefaultAvatar(src)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <h2 className="text-sm font-medium md:text-base md:font-bold lg:text-xl lg:font-extrabold mb-4">
            Add your location
          </h2>
          <div className="mb-12 flex">
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter a location"
              className="border-b border-gray-300 text-sm font-medium md:text-base py-2 mr-4 flex-1 focus:outline-none"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="flex flex-col w-52 items-center">
            <button
              onClick={handleNextClick}
              className={`bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg w-full disabled:bg-gray-400`}
              disabled={!avatarImage || !location}
            >
              Next
            </button>
            {avatarImage && location && (
              <p className="hidden lg:block text-gray-400 ml-4 text-sm font-bold mt-2">
                or Press RETURN
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
