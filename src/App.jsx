import { Link, Route, Routes } from "react-router-dom"
import Home from "./Component/Contex Api concept/Home"
import User from "./Component/Contex Api concept/User"
import Userdetail from "./Component/Contex Api concept/Userdetail"
import Exerciseone from "./Component/Reactjs Practice Set5/Exercise1/Exerciseone"
import Exercisetwo from "./Component/Reactjs Practice Set5/Exercise2 and 3/Exercisetwo"
import Exercisethree from "./Component/Reactjs Practice Set5/Exercise2 and 3/Exercisethree"
import Exercisefour from "./Component/Reactjs Practice Set5/Exercise4/Exercisefour"
import Exercisefive from "./Component/Reactjs Practice Set5/Exercise5/Exercisefive"
import Exercisesix from "./Component/Reactjs Practice Set5/Exercise6/Exercisesix"
import Exerciseseven from "./Component/Reactjs Practice Set5/Exercise7/Exerciseseven"


function App() {

  return (
   <>
   {/* <nav className="mt-10 flex justify-center gap-10">
    <Link to= "/">Home</Link>
    <Link to= "User">User</Link>
   </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/User" element={<User />} />
    <Route path="/first/:id" element={<Userdetail />} />
   </Routes> */}
   {/* <Exerciseone /> */}
   {/* <Exercisetwo /> */}
   {/* <Exercisethree /> */}
   {/* <Exercisefour heading={"User Profile"} width_of_img={"500px"} height_of_img={"400px"}/> */}
   {/* <Exercisefive /> */}
   {/* <Exercisesix /> */}
   <Exerciseseven />
   </>
  )
}

export default App
