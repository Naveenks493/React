import email from "../assets/email.png"


const Footer=({image})=>{
    return(
         <footer className="flex justify-center bg-blue-500 text-white  gap-3">
            <img src={image} alt="image" className="h-8" />
            <p className="font-bold">robert123@gmail.com</p>
        </footer>
       
    )
}
export default Footer;