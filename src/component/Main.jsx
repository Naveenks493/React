
const Main=({image})=>{
    return(
        <section className="bg-black text-white">
         <div className="flex justify-center">
            <div className="text-center py-50">
            <h1 className="font-bold text-3xl py-5">I'm Robert</h1>
            <p className="text-transition: uppercase text-2xl font-bold" >Full stack developer</p>
            <div className="py-10">
                 <button className="px-4 py-2 rounded text-white border border-white bg-blue-500 font-bold hover:text-black hover:bg-green-400">Hire Me</button>
            </div>
          </div>
          <div>
              <img src={image} alt="image" />
          </div>
          <div className="text-center py-50">
            <h1 className="font-bold text-2xl py-5">Expert in</h1>
            <p className="font-semibold">A MERN Stack Developer skilled in building <br/>
            dynamic web applications using MongoDB, <br/>
            Express.js, React.js, and Node.js.</p>
             <div className="py-10">
                 <button className="px-4 py-2 rounded text-white border border-white bg-blue-500 font-bold hover:text-black hover:bg-green-400">Resume</button>
            </div>
          </div>
        </div>
       </section>
    )
}
export default Main;