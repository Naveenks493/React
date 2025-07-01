import { Link } from "react-router";

const Navbar =()=>{
    return (
         <nav>
            <div className="bg-black px-10 py-4 flex justify-between">
                <h1 className="font-bold text-white text-transform: uppercase">Portfolio</h1>
                   <ul className="font-bold text-white text-transform: uppercase flex gap-7">
                    <li className=" hover:text-red-500"><Link to="/">Home</Link></li>
                    <li className=" hover:text-red-500"><Link to="/about">About</Link></li>
                    <li className=" hover:text-red-500"><Link to="/project">Project</Link></li>
                    <li className=" hover:text-red-500"><Link to="/contact">Contact</Link></li>
                </ul>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;