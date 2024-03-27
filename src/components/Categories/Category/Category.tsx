import React from "react";
import { MenuIcons } from "../../Menu/MenuIcons";
import { TriviaOptions, useOptions } from "../../context/OptionContext";
//TODO:CREATE SCSS FILE!
import classes from "../Category.module.scss";

interface ICategory {
  category: MenuIcons;
}

const Category = ({ category }: ICategory) => {
  const { options, setOptions } = useOptions();
  const refinedCatecory =
    category.category.split(": ")[1] ?? category.category.split(": ")[0];

  const optionHandler = (category: MenuIcons) => {
    const obj: TriviaOptions = {
      level: options.level,
      category: category.category,
      code: category.code,
    };

    if (
      options.code === category.code ||
      options.category === category.category
    ) {
      obj.category = "";
      obj.code = "";
    }
    setOptions(obj);
  };

  return (
    <div
      onClick={() => optionHandler(category)}
      style={
        options.code === category.code
          ? {
              transition: "ease-in-out 0.3s",
              backgroundColor: "#04aa6d",
            }
          : { backgroundColor: undefined }
      }
      className={classes.__category}
    >
      <span>{refinedCatecory}</span>
      <img src={category.icon} alt="" />
    </div>
  );
};

export default Category;
