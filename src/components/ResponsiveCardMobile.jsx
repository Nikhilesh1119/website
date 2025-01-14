import React, { useState, useRef } from "react";
import GraphicMobile from "../assets/Graphic.png";

const ResponsiveCardsMobile = ({
  items,
  views,
  selectedOption,
  setSelectedOption,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const diffX = e.touches[0].clientX - startX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) handlePrev(); // Swipe right
      else handleNext(); // Swipe left
      setStartX(null); // Reset after swipe
    }
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    const diffX = e.clientX - startX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) handlePrev(); // Swipe right
      else handleNext(); // Swipe left
      setStartX(null); // Reset after swipe
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedOption(items[newIndex].key);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedOption(items[newIndex].key);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setSelectedOption(items[index].key);
  };

  return (
    <div
      className="relative overflow-hidden"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setStartX(null)}
    >
      {/* Cards Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.key} className="flex-shrink-0 w-full px-4">
            <div className="bg-[#F4F5F6] rounded-[20px] p-4">
              <div className="bg-white rounded-[20px] p-4">
                {/* Header Section */}
                <div className="flex items-center space-x-2">
                  <img src={item.icon} alt={item.label} className="size-6" />
                  <div>
                    <h3 className="text-lg font-medium">{item.label}</h3>
                    <p className="text-sm text-black">{item.description}</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="relative mt-4">
                  <img
                    src={GraphicMobile}
                    alt="Main Graphic"
                    className="h-[200px] w-full rounded-lg transition-opacity duration-500 object-cover"
                  />
                  <div className="absolute inset-0 flex justify-end items-start mt-5 space-x-2 z-10">
                    {views.map((view, idx) => (
                      <div
                        key={idx}
                        className="w-[200px] flex flex-col items-center px-2 py-2 bg-transparent transition-opacity duration-500"
                      >
                        <img
                          src={view.icon}
                          alt={view.title}
                          className="w-12 h-12 mb-2"
                        />
                        <h2 className="text-xs font-gilroy text-center my-4">
                          {view.title}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? "w-4 bg-black" : "w-2 bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCardsMobile;
