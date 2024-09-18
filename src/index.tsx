import React from "react";

type Position = "bottom-left" | "bottom-right" | "top-left" | "top-right";

interface BreakpointIndicatorProps {
  position?: Position;
}

const BreakpointIndicator: React.FC<BreakpointIndicatorProps> = ({
  position = "bottom-right",
}) => {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const positionClasses = {
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50 font-mono text-sm`}
    >
      <div className="bg-gray-800 text-white px-3 py-1 rounded-full">
        <span className="sm:hidden">xs</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline 2xl:hidden">xl</span>
        <span className="hidden 2xl:inline">2xl</span>
      </div>
    </div>
  );
};

export default BreakpointIndicator;
