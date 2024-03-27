import classes from "./Login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserAction } from "../../store/slice/user.slice";

const REG: RegExp = /^[a-zA-Z\s]+$/;

const Login = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();
  const loginHandler = () => {
    if (!REG.test(name)) return alert("Please enter a valid name!");
    return dispatch(UserAction.login(name.trim()));
  };
  return (
    <div className={classes.__container}>
      <h2>Please Enter your name</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
