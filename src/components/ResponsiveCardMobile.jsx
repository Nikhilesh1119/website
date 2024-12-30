import GraphicMobile from "../assets/GraphicMobile.png";

const ResponsiveCardsMobile = ({ items, views }) => {
  const InfoCard = ({ icon, title }) => (
    <div className="w-[200px] flex flex-col items-center px-2 py-2 bg-transparent transition-opacity duration-500">
      <img src={icon} alt={title} className="w-12 h-12 mb-2" />
      <h2 className="text-xs font-gilroy text-center my-4">{title}</h2>
    </div>
  );

  return (
    <div className="flex flex-row space-x-2 overflow-x-scroll">
      {items.map((item) => (
        <div key={item.key} className="flex-shrink-0 w-full">
          <div className="bg-[#F4F5F6] rounded-[20px] p-4">
            <div className="bg-white rounded-[20px] p-4">
              {/* Header Section */}
              <div className="flex items-center space-x-2">
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <div>
                  <h3 className="text-lg font-medium">{item.label}</h3>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="relative mt-4">
                {/* Graphic Image */}
                <img
                  src={GraphicMobile}
                  alt="Main Graphic"
                  className="h-[200px] w-full rounded-lg transition-opacity duration-500 object-cover"
                />
                {/* Info Cards */}
                <div className="absolute inset-0 flex pl-[15%] justify-end items-start mt-5 space-x-2 z-10">
                  {views.map((view, index) => (
                    <InfoCard key={index} icon={view.icon} title={view.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveCardsMobile;
