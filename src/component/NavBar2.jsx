import { Link } from "react-router";
const NavBar2 =()=>{
    return (
         <nav>
            <div className="bg-red-400 w-[80%] fixed left-[20%]  h-16 top-0 right-0 flex justify-between p-4">
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

export default NavBar2;