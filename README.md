# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

# DESCRIPTION

## hotel-app
This is a sample React application that allows users to select a room and drop guests into that room. The app includes three main components: Rooms, Guests, and Board.

## Rooms
The Rooms component displays a list of available rooms and allows users to select a room by clicking on it. The selected room is then displayed in the Information section of the app.

## Guests
The Guests component displays a list of available guests that can be dropped into the selected room.

## Board
The Board component is a reusable component that provides a drag-and-drop interface for the Guests and Rooms components.

# List components : GuestList, Roomlist
These components were created to store data arrays to keep main components as short and destructurised as possible.

# TECHNOLOGIES
React
CSS
HTML
JS

# FUNCTIONS

## App.js
`handleRoomSelection`: handles the selection of a room by the user.
`handleGuestDrop`: handles the dropping of a guest onto a selected room.
`handleDragOver`: handles the dragging over of a guest onto a selected room.

## Guests.js
`handleDragOver`: This function is called when a drag event is happening over the drop area. It prevents the default behavior of the event to allow dropping of the guest.

## Rooms.js
`handleRoomClick`: is a function that handles the click event on a room item.

## Board.js
`drop(e)` : This function is called when a draggable element is dropped onto the board. It prevents the default behavior of the event, checks if the drop target is the "selected-room" div, gets the id of the dropped element, finds the element by its id, makes it visible, and appends it to the drop target.

`dragOver(e)`: This function is called when a draggable element is dragged over the board. It prevents the default behavior of the event, checks if the drop target is the "selected-room" div, and sets the drop effect to "move" if it is.

## Card.js
`dragStart`: This function is triggered when the card starts being dragged. It sets the data transfer value with the card's id, and sets a timeout to hide the card's display to provide visual feedback to the user.

`dragOver`: This function is triggered when a card is being dragged over another element. It stops the propagation of the event to allow the drop event to be triggered on the target element.


# FUTURE COMPONENTS

`searchBar` : A component to filter guest elements in "Guest List" board. Implement useState to track which elements are taken and operate on modified array.

# FIXES

Selected-room div should act as a individual storage container, when being switched between RoomList elements, every container should keep it's guest elements.

Save applications state and data using JSON string: `JSON.stringify` and then save it to `localStorage` using unique key.

GuestList last element delete( random droppable area)

When guest element  was dropped on "selected-room" div and it doesn't stick, that element should come back to the Guest_List .

# ADDITIONAL FUNCTIONALITIES
Take guest elements from one room and drag it to another room.





