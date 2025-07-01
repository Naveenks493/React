import Cardcomponent from "./Cardcomponent"
import reactimage from "../assets/react.svg"

const CardSection=()=>{
    return(
        <div className="w-full min-h-screen flex flex-col item center p-10 gap-6">
            <h1 className="text-2xl font-bold text-grey-700 text-center">courses</h1>
          <div className="w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Cardcomponent
            image={reactimage}
            title="full stack development"
            description="pg certification"
            buttontext="enroll now"
            className={"bg-green-500"}
            />
             <Cardcomponent
            image={reactimage}
            title="dm courses"
            description="pg certification"
             buttontext="message now"
              className={"bg-yellow-500"}
            />
             <Cardcomponent
            image={reactimage}
            title="AI development"
            description="ug certification"
             buttontext="enable now"
              className={"bg-amber-600"}
            />
             <Cardcomponent
            image={reactimage}
            title="ragul development"
            description="ug certification"
             buttontext="submit now"
              className={"bg-red-600"}
            />
          </div>
        </div>
    )
}
export default CardSection;