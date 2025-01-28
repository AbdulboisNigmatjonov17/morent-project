import React from "react";
import Car from "../../pages/rent/CarNformation";
import Step1of4 from "../../components/RentComponents/Step1of4";
import Step2of4 from "../../components/RentComponents/Step2of4";
import Step3of4 from "../../components/RentComponents/Step3of4";
import Step4of4 from "../../components/RentComponents/Step4of4";

const RentCard = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[50%] flex flex-col gap-8">
        <Step1of4 />
        <Step2of4 />
        <Step3of4 />
        <Step4of4 />
      </div>
      <div className="w-[40%]">
        <Car />
      </div>
    </div>
  );
};

export default RentCard;
