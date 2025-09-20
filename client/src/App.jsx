import Login from "./pages/Login"
import { createBrowserRouter } from "react-router-dom"
import HeroSection from "./pages/student/HeroSection"
import MainLayout from "./layout/MainLayout"
import { RouterProvider } from "react-router-dom"
import Courses from "./pages/student/Courses"
const appRouter = createBrowserRouter([
{path:"/",
element:<MainLayout/>,
children:[
  {
 path:"/",
 element:<>
 <HeroSection/>
 <Courses/>
 </>
  },
  {
    path:"/login",
    element:<Login/>
  }
]
}
])
function App() {
  return (
   <main>
    <RouterProvider router={appRouter}/>

   </main>
   
  )
}

export default App