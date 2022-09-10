import React from "react";
import { findDateTime } from "../../utils";
import "./card.css";

const GridCard = ({ eachNote }) => {
  return (
    <div
      className="card-box text-cardbox grid-card"
      style={{ backgroundColor: `${eachNote.color}` }}
    >
      <div className="text-card-header">
        <h2 className="card-title">{eachNote.title}</h2>
      </div>

      <p className="card-text">{eachNote.description}</p>

      <div className="grid-card-footer">
        <p className="card-text grey-text">
          {findDateTime(eachNote.createdAt)}
        </p>
      </div>
    </div>
  );
};

export { GridCard };
