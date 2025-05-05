import { createContext, useState, useEffect } from "react";
import useTasks from "../../CustomHook/useTasks";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

    const { tasks, getTasks, addTask, removeTasks, updateTask } = useTasks()


    useEffect(() => {
        getTasks()
    }, [])


    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    )
}
