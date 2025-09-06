// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="car-loader">
        <div className="car-body"></div>
        <div className="car-top"></div>
        <div className="wheel wheel-front"></div>
        <div className="wheel wheel-back"></div>
      </div>
      <p className="mt-4 text-gray-600 font-semibold">
        Loading awesome cars...
      </p>
    </div>
  );
};

export default Loader;
