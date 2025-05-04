import { useContext } from "react"
import { TaskContext, TaskProvider } from "./Context/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import Navbar from "./Components/navbar"
import TaskComponent from "./Components/TaskComponent"



export default function App() {
  const { res } = useContext(TaskContext)
  console.log("ArrayRes", res)


  return (

    <BrowserRouter>
      <Navbar />
      <TaskComponent />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/TaskList" Component={TaskList} />
        <Route path="/AddTask" Component={AddTask} />
      </Routes>
    </BrowserRouter>

  )
}

