import classes from "./Navbar.module.scss";
import Logo from "../../../assets/TriviaLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { UserAction } from "../../../store/slice/user.slice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  return (
    <header className={classes.__headerContainer}>
      <Link className={classes.__link} to={"/"}>
        <img src={Logo} alt="Trivia Logo" className={classes.__image} />
      </Link>
      <div className={classes.__links}>
        <Link className={classes.__link} to={"/main"}>
          Home
        </Link>
        <Link className={classes.__link} to={"/stats"}>
          Statistics
        </Link>
      </div>
      <div className={classes.__user}>
        {user.isAuth ? (
          <>
            <span>Hello {user.name}</span>
            <button
              onClick={() => {
                dispatch(UserAction.logout());
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Navbar;
