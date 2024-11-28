"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

const Grid = () => {
  // State to hold the current grid size (default is 16x16)
  const [gridSize, setGridSize] = useState(16);

  // Calculate the total number of boxes in the grid based on grid size
  const totalBoxes = gridSize * gridSize;

  // Calculate the dynamic size of each box so they fit within the fixed container
  const boxSize = 400 / gridSize;

  return (
    <div className={styles.container}>
      {/* Dropdown to select the grid size */}
      <div className={styles["container__dropdown"]}>
        {/* Label for the dropdown */}
        <label htmlFor="grid-size" className={styles["container__label"]}>
          Select Grid Size:
        </label>
        {/* Dropdown for selecting grid size, updates state on change */}
        <select
          id="grid-size"
          value={gridSize}
          onChange={(e) => setGridSize(parseInt(e.target.value, 10))}
          className={styles["container__select"]}
        >
          <option value={8}>8x8</option>
          <option value={16}>16x16</option>
          <option value={32}>32x32</option>
        </select>
      </div>

      {/* Main container for the grid */}
      <div className={styles["container__grid"]}>
        {/* Wrapper for the grid boxes; uses CSS variable for box size */}
        <div
          className={styles["container__grid-wrapper"]}
          style={{ "--box-size": `${boxSize}px` }}
        >
          {/* Generate grid boxes dynamically based on totalBoxes */}
          {Array.from({ length: totalBoxes }).map((_, index) => (
            <div key={index} className={styles["container__grid-box"]}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
