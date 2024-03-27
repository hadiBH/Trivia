import React from "react";
import { TriviaOptions, useOptions } from "../../context/OptionContext";

interface LevelProps {
  level: string;
}

const Level = ({ level }: LevelProps) => {
  const { options, setOptions } = useOptions();

  const clickHandler = (level: string) => {
    const obj: TriviaOptions = {
      category: options.category,
      code: options.code,
      level: level,
    };
    if (options.level === level) {
      obj.level = "";
    }

    setOptions(obj);
  };
  return (
    <button
      onClick={() => {
        clickHandler(level);
      }}
      style={
        options.level === level
          ? {
              transition: "ease-in-out 0.3s",
              backgroundColor: "#04aa6d",
            }
          : { backgroundColor: undefined }
      }
    >
      {level}
    </button>
  );
};

export default Level;
