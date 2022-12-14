import React from "react";
import { colors } from "../../utils";
import "./colors.css";

const Colors = ({ setFormData , showColorPalette}) => {
  const colorHandler = (color) => {
    setFormData((prevData) => ({ ...prevData, color: color }));
    showColorPalette(false)
  };

  return (
    <div className="color-box-wrapper">
      {colors.map((color, i) => (
        <div
          onClick={() => colorHandler(`#${color}`)}
          className="color-box"
          key={i}
          style={{ backgroundColor: `#${color}` }}
        ></div>
      ))}
    </div>
  );
};

export { Colors };
