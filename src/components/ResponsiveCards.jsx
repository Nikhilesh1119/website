import Graphic from "../assets/Graphic.png";

const ResponsiveCards = ({
  bgImage,
  items,
  views,
  selectedOption,
  setSelectedOption,
}) => {
  const InfoCard = ({ icon, title, description, isVisible }) => (
    <div
      className={`w-[230px] flex flex-col items-center px-2 py-2 bg-transparent transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={icon} alt={title} className="w-16 h-16 mb-2" />
      <h2 className="text-xl font-gilroy text-center my-4">{title}</h2>
      <p className="text-base font-roboto-regular text-center text-gray-600">
        {description}
      </p>
    </div>
  );

  return (
    <div>
      {/* Cards */}
      <div className="flex flex-row justify-center items-center space-x-4">
        {items.map((item) => (
          <div
            key={item.key}
            className={`px-[10px] py-[10px] cursor-pointer transition-all duration-300 ${
              selectedOption === item.key
                ? "text-black scale-105 shadow-lg rounded-lg"
                : "text-[#9098A0] scale-100"
            }`}
            onClick={() => setSelectedOption(item.key)}
          >
            <div className="flex flex-row justify-start items-center">
              <img
                src={selectedOption === item.key ? item.icon : item.blurIcon}
                alt={item.label}
                className="w-6 h-6"
              />
              <div className="text-xl font-roboto-medium ml-1.5">
                {item.label}
              </div>
            </div>
            <div
              className={`mt-[10px] font-roboto-regular ${
                selectedOption === item.key ? "text-black" : "text-[#9098A0]"
              }`}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
      {/* selected card data */}
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-full flex justify-center space-x-4 mt-[80px] z-10">
          {views.map((view, index) => (
            <InfoCard
              key={index}
              icon={view.icon}
              title={view.title}
              description={view.description}
              isVisible={true}
            />
          ))}
        </div>
        <img
          src={Graphic}
          // src={bgImage}
          alt="Main Graphic"
          className="absolute h-[300px] mt-[64px] rounded-[20px] transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default ResponsiveCards;
