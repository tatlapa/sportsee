import React from "react";

interface MacronutritientProps {
  icon: string;
  quantity: number;
  measurementUnit: string;
  nutritient: string;
}

const Macronutritient: React.FC<MacronutritientProps> = (props) => {
  return (
    <div className="p-8 w-64 flex gap-4 bg-[#FBFBFB] rounded-xl">
      <img src={props.icon} alt="" />
      <div className="flex flex-col">
        <span className="text-2xl">{props.quantity}{props.measurementUnit}</span>
        <span className="text-xs text-gray-400">{props.nutritient}</span>
      </div>
    </div>
  );
};

export default Macronutritient;
