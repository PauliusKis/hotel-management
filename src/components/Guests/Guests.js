import React, { useState } from "react";
import { guestList } from "./GuestList";
import "./Guests.css";
import Card from "../../Card";

function Guests(props) {
  const [droppedGuests, setDroppedGuests] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const guestId = event.dataTransfer.getData("text/plain");
    const guest = guestList.find((guest) => guest.id === guestId);
    setDroppedGuests([...droppedGuests, guest]);
    console.log("Dropped Guest ID:", guestId);
    if (props.onGuestDrop) {
      props.onGuestDrop(event, guest);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {guestList.map((guest) => (
        <Card
        key={guest.id}
          id={guest.id}
          className="card_list"
          draggable="true"
          onDragStart={(event) => {
            event.dataTransfer.setData("text/plain", guest.id);
          }}
        >
          <div className="guest_cards" key={guest.id}>
            <p>
              {guest.first_name} {guest.last_name}
            </p>
          </div>
        </Card>
      ))}
      
    </div>
  );
}

export default Guests;
