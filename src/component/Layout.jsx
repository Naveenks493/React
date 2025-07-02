import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SideNavbar from "./SideNavbar"
import NavBar2 from "./NavBar2"
import Website from "./Website"
import About from "./About"


const Layout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className="flex">
        <SideNavbar />
        <NavBar2 />
        </div>
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default Layout