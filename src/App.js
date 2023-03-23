import React, { useState } from "react";
import Board from "./components/Board";
import Rooms from "./components/Rooms/Rooms";
import { rooms } from "./components/Rooms/RoomList";
import Guests from "./components/Guests/Guests";
import { guestList } from "./components/Guests/GuestList";

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [availableRooms, setAvailableRooms] = useState(rooms);

  const handleRoomSelection = (room) => {
    if (selectedRoom) {
      setAvailableRooms((prevRooms) =>
        prevRooms.concat(selectedRoom).sort((a, b) => a.id - b.id)
      );
    }
    setSelectedRoom(room);
    setAvailableRooms((prevRooms) => prevRooms.filter((r) => r.id !== room.id));
  };
  const handleGuestDrop = (event, guest) => {
    event.preventDefault();
    console.log("handleGuestDrop called");
    console.log("Guest ID:", guest?.id);
    const foundGuest = guestList.find((g) => g.id === guest?.id);
    console.log("Found Guest:", foundGuest);
    if (selectedRoom) {
      setSelectedRoom((prevRoom) => ({
        ...prevRoom,
        guests: [...(prevRoom.guests || []), foundGuest],
      }));
      console.log("Dropped Guest ID:", foundGuest?.id);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <main className="flexbox">
        <div className="board-label-rooms">Rooms</div>
        <Board id="board-rooms" className="board-rooms">
          <Rooms
            id="rooms"
            className="rooms"
            selectedRoom={selectedRoom}
            items={availableRooms.map((room) => ({
              ...room,
              onClick: () => handleRoomSelection(room),
            }))}
            onRoomClick={handleRoomSelection}
          />
        </Board>
        <div className="board-label-info">Information</div>
        <Board id="board-1" className="board-info">
          {selectedRoom && (
            <div
              onDragOver={handleDragOver}
              onDrop={handleGuestDrop}
              className="selected-room"
            >
              <h2>{selectedRoom.name}</h2>
              <p>{selectedRoom.description}</p>
            </div>
          )}
        </Board>
        <div className="board-label-guests">Guests</div>
        <Board id="board-2" className="board-guests">
          <Guests className="guest_cards" />
        </Board>
      </main>
    </div>
  );
}

export default App;
