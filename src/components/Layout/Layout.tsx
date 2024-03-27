import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;
