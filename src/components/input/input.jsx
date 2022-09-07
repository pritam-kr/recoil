import React, { useState } from "react";
import "./input.css";
import * as FaIcons from "react-icons/io";
import { Colors } from "../colorPallet/colors";

const Input = () => {
  const [colorPalette, showColorPalette] = useState(false);

  const [formData, setFormData] = useState({title: "", description: "", color: ""})

  console.log(formData)

  return (
    <div className="note-inputs-wrapper">
      <div className="input-title">
        <input
          type="text"
          className="input input-title"
          placeholder="Enter Note Title"
        />
      </div>
      <div className="input-description">
        <textarea
          type="text"
          className="input input-description"
          placeholder="Describe"
        />
      </div>
      <div className="add-btn-wrapper">
        <div className="input-icons-wrapper">
          <FaIcons.IoMdColorPalette
            className="icons input-icons"
            onClick={() => showColorPalette(!colorPalette)}
          />
          {colorPalette && <Colors setFormData={setFormData} />}
        </div>{" "}
        <button className="btn btn-primary">Add New</button>
      </div>
    </div>
  );
};

export { Input };
