import { Route, Routes } from "react-router";
import Dynamic from "./Dynamic";
import UsersComponent, { UserDetails } from "./DynamicRouting";
import Layout from "./Layout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route path="/" element={<List />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<h1>hello, not found go back stay tuned updayed</h1>}/> */}
        {/* <Route path="/cards/:id" element={<Dynamic />} /> */}
      <Route path="/users" element={<UsersComponent />} />
      <Route path="/user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};
export default Routers;
