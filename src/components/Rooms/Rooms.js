import React from "react";
import "./Rooms.css";

function Rooms(props) {
  
  const { selectedRoom, items, onRoomClick } = props;

  const handleRoomClick = (room) => {
    onRoomClick(room);
  };

  return (
    <div className="rooms">
      {items.map((item) => (
        <div
        key={item.id}
          id={item.id}
          className={`room ${
            item.id === selectedRoom?.id ? "selected" : ""
          }`}
          onClick={() => handleRoomClick(item)}
        >
          <h3>{item.name}</h3>
          <h4>{item.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default Rooms;
