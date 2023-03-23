import React from "react";
import "./Board.css"

function Board(props) {
  const { id, className } = props;
  const isDraggable = id !== "board-rooms";

  const drop = (e) => {
    e.preventDefault();

    // check if the drop target is the "selected-room" <div>
    if (e.target.classList.contains("selected-room")) {
      const card_id = e.dataTransfer.getData("card_id");
      const card = document.getElementById(card_id);
      card.style.display = "block";
      e.target.appendChild(card);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();

    // check if the drop target is the "selected-room" <div>
    if (e.target.classList.contains("selected-room")) {
      e.dataTransfer.dropEffect = "move";
    }
  };

  return (
    <div
      id={id}
      className={className}
      {...(isDraggable && { onDrop: drop, onDragOver: dragOver })}
      style={{ height: "100%", overflow: "auto" }}
    >
      <div style={{ height: "fit-content" }}>{props.children}</div>
    </div>
  );
}

export default Board;
