import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import Man from "../assets/image.png"
import Email from "../assets/email.png"



const Website=()=>{
    return (
        <>
        <Navbar />
        <Main 
        image={Man}
        />
        <Footer 
        image={Email}/>
         </>
    )
}
export default Website;
