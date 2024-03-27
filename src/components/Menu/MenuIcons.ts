import General from "../../assets/menu icons/General Knowledge.svg";
import Film from "../../assets/menu icons/Film.svg";
import Music from "../../assets/menu icons/Music.svg";
import Books from "../../assets/menu icons/Books.svg";
import History from "../../assets/menu icons/History.svg";
import Sports from "../../assets/menu icons/Sports.svg";
import Vehicles from "../../assets/menu icons/Vehicles.svg";
import Animals from "../../assets/menu icons/Animals.svg";
import Geography from "../../assets/menu icons/Geography.svg";
import Celebrities from "../../assets/menu icons/Celebrities.svg";
import Mythology from "../../assets/menu icons/Mythology.svg";
import Art from "../../assets/menu icons/Art.svg";


export interface MenuIcons {
  category: string;
  icon: string;
  code: string;
}

const CATEGORIES: MenuIcons[] = [
  { category: "General Knowledge", icon: General, code: "9" },
  { category: "Entertainment: Books", icon: Books, code: "10" },
  { category: "Entertainment: Film", icon: Film, code: "11" },
  { category: "Entertainment: Music", icon: Music, code: "12" },
  { category: "Sports", icon: Sports, code: "21" },
  { category: "History", icon: History, code: "23" },
  { category: "Vehicles", icon: Vehicles, code: "28" },
  { category: "Animals", icon: Animals, code: "27" },
  { category: "Geography", icon: Geography, code: "22" },
  { category: "Celebrities", icon: Celebrities, code: "26" },
  { category: "Mythology", icon: Mythology, code: "20" },
  {
    category: "Art",
    icon: Art,
    code: "25",
  },
];

export default CATEGORIES;
