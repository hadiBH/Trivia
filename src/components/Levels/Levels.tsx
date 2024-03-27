import React from "react";
import classes from "./Levels.module.scss";
import Level from "./Level/Level";

const LEVELS = ["Easy", "Medium", "Hard"];

const Levels = () => {
  return (
    <div className={classes.__btns}>
      <h2 style={{ color: "white" }}>Select Difficulty</h2>
      {LEVELS.map((level, index) => (
        <Level level={level} key={level + index} />
      ))}
    </div>
  );
};

export default Levels;
