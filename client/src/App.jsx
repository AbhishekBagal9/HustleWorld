import { Button } from "@/components/ui/button"
import Login from "./pages/Login"
import Navbar from "./components/ui/Navbar"
import HeroSection from "./pages/student/HeroSection"


function App() {
  return (
   <main>
    <Navbar/>
       <HeroSection/>
     <Login/>

   </main>
   
  )
}

export default App