import React from 'react'
import { MenuIcons } from '../../Menu/MenuIcons'
import { TriviaOptions, useOptions } from '../../context/OptionContext'
//TODO:CREATE SCSS FILE!
import classes from '../Category.module.scss';


interface ICategory {
  catagory: MenuIcons
}

const Category = ({catagory}: ICategory) => {
  const { options, setOptions} = useOptions();
  const refinedCatacory =
  catagory.catagory.split(": ")[1] ??
  catagory.catagory.split(": ")[0];
  
  const optionHandler = (catagory: MenuIcons) => {
    setOptions((prev:TriviaOptions) => {
      if (prev.code === catagory.code) {
        return { ...prev, code: '' };
      } else if (prev.category === catagory.catagory) {
        return { ...prev, category: '' };
      } else {
        return {
          ...prev,
          category: catagory.catagory,
          code: catagory.code,
        };
      }
    });
  }


  return (
    <div
      onClick={() => optionHandler(catagory)}    
        style={
          options.code === catagory.code
            ? {
                transition: "ease-in-out 0.3s",
                backgroundColor: "#04aa6d",
              }
            : { backgroundColor: undefined }
        }
        className={classes.__category}
      >
        <span>{refinedCatacory}</span>
        <img src={catagory.icon} alt="" />
      </div>
  )
}

export default Category