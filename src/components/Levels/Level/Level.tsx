import React from 'react'
import { useOptions } from '../../context/OptionContext';

interface LevelProps {
  level: string;
}

const Level = ({level}:LevelProps) => {
  const { options, setOptions} = useOptions();
  return (
    <button
    onClick={() => setOptions((prev: any) => ({ ...prev, level: level }))}
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
  )
}

export default Level