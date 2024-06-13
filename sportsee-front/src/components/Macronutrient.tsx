import React from "react";
import Loading from "./Utilities/Loading";

interface MacronutritientProps {
  icon: string;
  quantity: number;
  measurementUnit: string;
  nutritient: string;
  isLoading: boolean;
}

const Macronutritient: React.FC<MacronutritientProps> = (props) => {
  if (props.isLoading) return <Loading />;

  return (
    <div className="p-8 w-64 flex gap-4 bg-[#FBFBFB] rounded-xl">
      <img src={props.icon} alt="" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold">
          {props.quantity}
          {props.measurementUnit}
        </span>
        <span className="text-sm text-gray-400">{props.nutritient}</span>
      </div>
    </div>
  );
};

export default Macronutritient;
