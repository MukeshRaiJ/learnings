import React from "react";

// Simple grid
const Grid = () => {
  // Make array of 256 items (16x16)
  let boxes = [];
  for (let i = 0; i < 256; i++) {
    boxes.push(<div className="small-box" key={i}></div>);
  }

  return (
    <div>
      {/* Main container */}
      <div
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        {/* Box that holds all small boxes */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {/* All the small boxes */}
          {boxes.map((box) => box)}
        </div>
      </div>

      {/* Style for small boxes */}
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
