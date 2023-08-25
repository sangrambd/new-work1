import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";



const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;