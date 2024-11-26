import React from "react";

const Card = ({ icon, heading, description }) => {
  return (
    <div
      className="w-100 h-100 bg-white/5 backdrop-blur-sm border border-primary/60 rounded-lg shadow-md p-2 flex flex-col justify-start items-start overflow-hidden"
      style={{ width: "250px", height: "250px" }}
    >

      <div className="p-2 m-2 bg-[#d9d9d9]/15 rounded-full">
        <img src={icon} height={30} width={30} alt="logo" />
      </div>
      <h1 className="my-5 mx-3 text-white text-lg font-bold w-full">{heading}</h1>


      <p className="mt-1 mx-3 text-sm text-gray-200 overflow-hidden text-ellipsis">
        {description}
      </p>
    </div>
  );
};

export default Card;

