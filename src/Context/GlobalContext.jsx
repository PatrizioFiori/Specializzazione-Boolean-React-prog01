import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [res, setRes] = useState([])

    async function fetchAndJson() {
        try {
            const response = await fetch(`${apiUrl}/tasks`);
            const data = await response.json();
            setRes(data)
        } catch (err) {
            console.log("Errore nel fetch", err)
        }
    }


    useEffect(() => {
        fetchAndJson()
    }, [])


    return (
        <TaskContext.Provider value={{ res }}>
            {children}
        </TaskContext.Provider>
    )
}
