import { createContext, useState, useEffect } from "react";
import useTasks from "../../CustomHook/useTasks";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

    const { tasks, getTasks, addTask, removeTasks, updateTask } = useTasks()


    useEffect(() => {
        getTasks()
    }, [tasks])


    return (
        <TaskContext.Provider value={{ tasks, getTasks, addTask, removeTasks, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}
