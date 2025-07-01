// import Navbar from "./component/Navbar"
// import Main from "./component/Main"
// import Footer from "./component/Footer"

// const add=()=>{
//   return(
//     <div>
//       <p>hello app</p>
//       <Navbar/>
//       <Main/>
//       <Footer/>
//     </div>
//   )
// }
// export default add;

import CutsomButton from "./component/Button";

const App = () => {
  const handeReset = () => {
    console.log("Form reset");
  };

  const handleGoBack = () => {
    console.log("Go back clicked");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row gap-3" >
          <CutsomButton
            className={"bg-blue-500"}
            buttonName={"Reset"}
            type="reset"
            onClick={handeReset}
          />
          <CutsomButton
            className={"bg-green-500"}
            buttonName={"Submit"}
            type="submit"
            onClick={handleSubmit}
          />
        </div>
    </div>
  );
};

export default App;