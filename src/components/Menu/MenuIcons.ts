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
  catagory: string;
  icon: string;
  code: string;
}

const CATAGORIES: MenuIcons[] = [
  { catagory: "General Knowledge", icon: General, code: "9" },
  { catagory: "Entertainment: Books", icon: Books, code: "10" },
  { catagory: "Entertainment: Film", icon: Film, code: "11" },
  { catagory: "Entertainment: Music", icon: Music, code: "12" },
  { catagory: "Sports", icon: Sports, code: "21" },
  { catagory: "History", icon: History, code: "23" },
  { catagory: "Vehicles", icon: Vehicles, code: "28" },
  { catagory: "Animals", icon: Animals, code: "27" },
  { catagory: "Geography", icon: Geography, code: "22" },
  { catagory: "Celebrities", icon: Celebrities, code: "26" },
  { catagory: "Mythology", icon: Mythology, code: "20" },
  {
    catagory: "Art",
    icon: Art,
    code: "25",
  },
];

export default CATAGORIES;
