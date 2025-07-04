import { Outlet } from "react-router"
import SideNavbar from "./SideNavbar"
import NavBar2 from "./NavBar2"

const Layout = () => {
  return (
    <div>
      <SideNavbar />
      <div className="flex ml-[20%]">
        <NavBar2 />
        <div className="flex-1 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
