import React, { useState } from "react";
import "./filterBar.css";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/io";
import { colors } from "../../utils";
import { selector, useRecoilValue, useSetRecoilState } from "recoil";
import { allNoteAtom } from "../../recoil/atoms/allNoteAtom";

 

const FilterBar = ({sorting}) => {
  const [colorPalette, showColorPalette] = useState(false);

  const colorPaletteHandler = () => {
    showColorPalette(!colorPalette);
  };

  const filterHandler = (key) => {
   
    sorting(key)
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-left-side">
        <select
          className="filter-latest-old"
          onChange={(event) => filterHandler(event.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="old">Old</option>
        </select>
      </div>
      <div className="filter-right-side">
        <div className="notes-color center">
          <FaIcons.IoMdColorPalette
            className="icons input-icons filter-icon"
            onClick={() => colorPaletteHandler()}
          />

          {colorPalette && (
            <div className="color-box-wrapper filter-color-palette">
              {colors.map((color, i) => (
                <div
                  className="color-box"
                  key={i}
                  style={{ backgroundColor: `#${color}` }}
                ></div>
              ))}
            </div>
          )}
        </div>
        <div className="notes-list center">
          <BsIcons.BsListTask className="icons input-icons filter-icon" />
        </div>
        <div className="notes-card center">
          <BsIcons.BsFillGridFill className="icons input-icons filter-icon" />
        </div>
      </div>
    </div>
  );
};

export { FilterBar };
