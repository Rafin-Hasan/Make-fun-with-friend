import React, { useState } from "react";

const DoYouLoveMeForm = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleYesClick = () => {
    setShowAnimation(true); // Show animation when Yes is clicked
  };

  const moveNoButton = () => {
    const randomX = Math.random() * 80; // Random X-axis position (0-80%)
    const randomY = Math.random() * 80; // Random Y-axis position (0-80%)

    setNoHoverCount((prev) => {
      const newCount = prev + 1;

      if (newCount % 5 === 0) {
        setShowPopup(true); // Show popup every 5 hovers
      }

      return newCount;
    });

    setNoButtonStyle({
      position: "absolute",
      top: `${randomY}%`,
      left: `${randomX}%`,
      transform: "translate(-50%, -50%)", // Keep the button centered on its own size
      transition: "all 0.3s ease",
    });
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/08/80/61/96/360_F_880619685_KthUhh8fr65HEe57o1qQXxFieyaIMpRR.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!showAnimation ? (
        <div className="bg-white/50 p-6 md:p-10 rounded-3xl shadow-lg max-w-xs md:max-w-md w-full text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-pink-600 mb-6 md:mb-8 drop-shadow-md">
            Do You Love Me? 💖
          </h1>
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Yes Button */}
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 px-6 md:py-3 md:px-10 rounded-full text-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition duration-300"
            >
              Yes 💖
            </button>

            {/* No Button */}
            <button
              onMouseEnter={moveNoButton}
              style={noButtonStyle}
              className="bg-gradient-to-r from-red-400 to-red-600 text-white py-2 px-6 md:py-3 md:px-10 rounded-full text-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition duration-300"
            >
              No 😢
            </button>
          </div>
        </div>
      ) : (
        <div className="relative text-center min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 via-pink-400 to-red-500 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-bounce mb-6 md:mb-10 drop-shadow-lg">
            🎉 YES! I LOVE YOU TOO! 🎉
          </h1>
          <p className="text-xl md:text-3xl text-white font-light mt-4">
            You made my day! Let’s celebrate this moment! 💖✨
          </p>
          <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <div className="relative w-full h-full">
              {/* Sparkles */}
              {[...Array(50)].map((_, index) => (
                <div
                  key={index}
                  className="absolute bg-white rounded-full opacity-70 animate-ping"
                  style={{
                    width: `${Math.random() * 15 + 10}px`,
                    height: `${Math.random() * 15 + 10}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                ></div>
              ))}
              {/* Gradient Circles */}
              <div className="absolute top-10 left-10 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-blue-300 to-indigo-500 rounded-full opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center px-6">
          <div className="bg-white/90 p-6 md:p-8 rounded-lg shadow-2xl text-center w-full max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
              Why don’t you just give up and love me? 🥺💖
            </h2>
            <button
              onClick={closePopup}
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-6 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoYouLoveMeForm;
