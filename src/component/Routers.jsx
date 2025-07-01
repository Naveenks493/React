import { Route, Routes } from "react-router"
import Website from "./Website";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About";
import Contact from "./ContactComt";

const Routers =()=>{
  return(
    <Routes >
        <Route path="/" element={<Website />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>hello, not found go back stay tuned updayed</h1>} />
    </Routes>
  )
}
export default Routers;