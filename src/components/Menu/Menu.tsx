import classes from "./Menu.module.scss";
import OptionContextProvider from "../context/OptionContext";
import Categories from "../Categories/Categories";
import Levels from "../Levels/Levels";

interface MenuProps {
  startQuiz: (code:string, level:string, category: string) => void;
}

const Menu = ({ startQuiz }: MenuProps) => {

  return (
    <OptionContextProvider>
      <div className={classes.__menueContainer}>
        <Levels/>
        <Categories startQuiz={startQuiz}/>
      </div>
    </OptionContextProvider>

  );
};

export default Menu;
