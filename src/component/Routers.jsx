import { Route, Routes } from "react-router";
import Website from "./Website";
import About from "./About";
import Contact from "./ContactComt";
import Layout from "./Layout";
import NavBar2 from "./NavBar2";
import SideNavbar from "./SideNavbar";
import Main from "./Main";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Website />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>hello, not found go back stay tuned updayed</h1>}/>
      </Route> */}

      <Route  path="/" element={<Layout />}/>
    </Routes>
  );
};
export default Routers;
