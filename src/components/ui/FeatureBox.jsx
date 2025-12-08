import SideHeading from "./SideHeading";
import ImgFeatures from "./ImgFeatures";

const FeatureBox = ({ heading, image, text }) => {
  return (
    <div
      className="not-last:web_dev_div flex flex-col space-y-16
     md:space-y-24 lg:space-y-28 pb-20 md:pb-22 lg:pb-32    "
    >
      <SideHeading heading={heading} />

      <div
        className="flex flex-col space-y-10 items-center justify-center
         md:space-y-12 
         lg:flex-row lg:px-12 lg:space-y-12 lg:space-x-16
         xl:px-26 
         
          "
      >
        <ImgFeatures image={image} altText={"Web Developer"} />
        <div className="left w-xs md:w-xl  lg:w-1/2 flex    ">
          <h2
            className="italic text-xl md:text-2xl text-justify 
            font-semibold lg:pb-10 lg:line-clamp-10 xl:mb-10 text-gray-600 
            2xl:text-3xl
            "
          >
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
