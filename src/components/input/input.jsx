import React, { useState } from "react";
import "./input.css";
import * as FaIcons from "react-icons/io";
import { Colors } from "../colorPallet/colors";
import { createNewNoteService } from "../../services/getNotes";
import { useRecoilState } from "recoil";
import { allNoteAtom, loadingStatusAtom } from "../../recoil/atoms/allNoteAtom";

const Input = () => {
  const [colorPalette, showColorPalette] = useState(false);
  const [loadingState, setLoadingState] = useRecoilState(loadingStatusAtom);
  const [notes, setNotes] = useRecoilState(allNoteAtom);

  const [expand, setExpand] = useState(false);

  const expandHandler = (event) => {
    if (event.target.value.length > 0) {
      setExpand(true);
    } else if (event.target.value.length === 0) {
      setExpand(false);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "",
  });

  const createNewNote = async () => {
    if (!formData.title || !formData.description) {
      console.log("input");
    } else {
      try {
        setLoadingState((prevState) => ({ loading: true, error: "" }));
        const { data, status } = await createNewNoteService(formData);
        if (status === 201) {
          setNotes((prevData) => [...prevData, data]);
          setLoadingState((prevState) => ({ loading: false, error: "" }));
        }
      } catch (error) {
        setLoadingState((prevState) => ({
          loading: false,
          error: "Some error occurred while fetching data.",
        }));
      }
      setFormData((prevData) => ({
        title: "",
        description: "",
      }));
      setExpand(false);
    }
  };

  return (
    <div className="note-inputs-wrapper">
      <div className="input-title">
        <input
          value={formData.title}
          type="text"
          className="input input-title"
          placeholder="Enter Note Title"
          onChange={(event) => {
            setFormData((prevData) => ({
              ...prevData,
              title: event.target.value,
            }));
            expandHandler(event);
          }}
        />
      </div>

      {/*Expand after input filed get Target  */}

      <div className={!expand ? "expand" : "active-expand"}>
        <div className="input-description">
          <textarea
            value={formData.description}
            type="text"
            className="input input-description"
            placeholder="Describe"
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                description: event.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="add-btn-wrapper">
        <div className="input-icons-wrapper">
          <FaIcons.IoMdColorPalette
            className="icons input-icons"
            onClick={() => showColorPalette(!colorPalette)}
          />

          <FaIcons.IoIosTimer className="icons input-icons timer-icon" />
          <FaIcons.IoIosSave className="icons input-icons timer-icon" />

          {colorPalette && (
            <Colors
              setFormData={setFormData}
              showColorPalette={showColorPalette}
            />
          )}
        </div>{" "}
        {loadingState.loading ? (
          <button className="btn btn-primary">Loading..</button>
        ) : (
          <button className="btn btn-primary" onClick={() => createNewNote()}>
            Add New
          </button>
        )}
      </div>
    </div>
  );
};

export { Input };
