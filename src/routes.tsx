import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/Pages/MainPage/MainPage";
import StatsPage from "./components/Pages/StatsPage/StatsPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Login from "./components/Login/Login";

const Router = () => {
  const user = useSelector((state: RootState) => state.user);
  const routes = useRoutes([
    {
      path: "/",
      element: user.isAuth ? <Layout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/main" />, index: true },
        { path: "main", element: <MainPage /> },
        { path: "stats", element: <StatsPage /> },
      ],
    },
    {
      path: "/login",
      element: <Layout />,
      children: [
        {
          path: "",
          element: !user.isAuth ? <Login /> : <Navigate to="/main" />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ]);

  return routes;
};

export default Router;
