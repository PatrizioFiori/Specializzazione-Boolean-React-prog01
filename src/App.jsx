import { useState, useEffect, useReducer, useMemo } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/HomePage"
import TaskList from "../pages/TaskList"
import AddTask from "../pages/AddTask"
import Navbar from "../Components/navbar"


export default function App() {



  return (
    <>
      <Navbar />
      <BrowserRouter >
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/TaskList" Component={TaskList} />
          <Route path="/AddTask" Component={AddTask} />
        </Routes>
      </BrowserRouter >
    </>
  )
}