import { createContext, useState, useEffect } from "react";
import useTasks from "../../CustomHook/useTasks";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

    const { tasks, setTasks, infoSingoloTask, getTasks, addTask, removeTasks, updateTask } = useTasks()


    useEffect(() => {
        getTasks()
    }, [])


    return (
        <TaskContext.Provider value={{ tasks, setTasks, infoSingoloTask, getTasks, addTask, removeTasks, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}
