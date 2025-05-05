import { useState } from 'react'

function useTasks() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [tasks, setTasks] = useState([])

    async function getTasks() {
        try {
            const data = await fetch(`${apiUrl}/tasks`);
            const dataJson = await data.json();
            setTasks(dataJson)
        } catch (err) {
            console.log("Errore nel fetch", err)
        }
    }

    function addTask() { }
    function removeTasks() { }
    function updateTask() { }


    return { tasks, getTasks, addTask, removeTasks, updateTask }
}

export default useTasks
