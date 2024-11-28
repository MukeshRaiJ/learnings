import React from "react";

// Component to create a 16x16 grid of small boxes
const Grid = () => {
  // Create an array to hold 256 small box elements
  // We're using 16x16 to create a square grid (16 * 16 = 256)
  let boxes = [];

  // Loop to generate 256 small box elements
  // Each box will be added to the 'boxes' array
  for (let i = 0; i < 256; i++) {
    // Create a div for each box with a unique key
    // The key helps React efficiently update the list
    boxes.push(<div className="small-box" key={i}></div>);
  }

  return (
    <div>
      {/* Main container with fixed dimensions */}
      <div
        style={{
          width: "400px", // Total width of the grid
          height: "400px", // Total height of the grid
        }}
      >
        {/* Flex container to arrange small boxes in a grid layout */}
        <div
          style={{
            display: "flex", // Use flexbox for layout
            flexWrap: "wrap", // Allow boxes to wrap to next line
          }}
        >
          {/* Render all the small boxes */}
          {/* .map() is used to render each box from the boxes array */}
          {boxes.map((box) => box)}
        </div>
      </div>

      {/* CSS styles for the small boxes */}
      <style>
        {`
          .small-box {
            width: 24px;            
            height: 24px;           
            border: 1px solid white; 
          }
        `}
      </style>
    </div>
  );
};

export default Grid;
