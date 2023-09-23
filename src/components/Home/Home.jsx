import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <div>
    {/* fixed nav */}
      <Nav></Nav>

     {/* Outlet div */}
    <div className="min-h-screen">
      <Outlet></Outlet>
    </div>


    {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
