import React from "react";
import classes from "./Category.module.scss";
import CATAGORIES, { MenuIcons } from "../Menu/MenuIcons";
import Category from "./Category/Category";
import { useOptions } from "../context/OptionContext";

//TODO:Chagne the name.
interface MenuProps {
  startQuiz: (code: string, level: string, category: string) => void;
}

const Categories = ({ startQuiz }: MenuProps) => {
  const { options } = useOptions();

  const onClickHandler = async () => {
    startQuiz(options.code, options.level, options.category);
  };

  return (
    <div className={classes.__categoryContainer}>
      <h2 style={{ color: "white" }}>Select Category</h2>
      <div className={classes.__catagories}>
        {CATAGORIES.map((catagory: MenuIcons, index) => {
          return <Category key={catagory.code + index} catagory={catagory} />;
        })}
      </div>
      <div className={classes.__submit}>
        <button
          className={classes.__btn}
          disabled={!options.code || !options.level}
          onClick={onClickHandler}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Categories;
