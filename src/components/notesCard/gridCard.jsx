import React from "react";
import "./card.css";

const GridCard = ({ eachNote }) => {
  return (
    <div
      class="card-box text-cardbox grid-card"
      style={{ backgroundColor: `${eachNote.color}` }}
    >
      <div class="text-card-header">
        <h2 class="card-title">{eachNote.title}</h2>
      </div>

      <p class="card-text">{eachNote.description}</p>
    </div>
  );
};

export { GridCard };
