import axios from 'axios';
import { useState } from 'react'

function useTasks() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [tasks, setTasks] = useState([])
    const [infoSingoloTask, setInfoSingoloTask] = useState(null)

    async function getTasks(taskId = null) { //fetch dei tasks o del singolo task su base ID (rotta di fetch per id non presente sul backend fornito) 
        try {
            const url = taskId
                ? `${apiUrl}/tasks/${taskId}`
                : `${apiUrl}/tasks`
            const response = await axios.get(url);
            if (taskId) {
                setInfoSingoloTask(response.data)
            } else {
                setTasks(response.data);
            }

        } catch (err) {
            console.error("Errore nel fetch:", err);
        }
    }

    async function addTask(taskToAdd) { //funzione aggiunta di un nuovo task tramite form
        try {
            const response = await axios.post(`${apiUrl}/tasks`, taskToAdd);
            const { success, message } = response.data;
            if (!success) {
                throw new Error(message);
            }

            await getTasks()
            console.log("Task aggiunto")
        } catch (err) {
            console.error("Errore nell'aggiunta del task:", err.message);
        }
    }

    async function removeTasks(id) {
        try {
            const resDelete = await axios.delete(`${apiUrl}/tasks/${id}`);
            if (resDelete.data.success) {
                console.log("Task cancellato");
            } else {
                throw new Error("La cancellazione del task è fallita");
            }
        } catch (error) {
            console.error("Errore nel delete:", error.message);
        }
    }


    async function updateTask(taskToMod) {
        //taskToMod sarà un obj derivante da un form con al suo interno le modifiche e 
        // le info importanti come l'id
        try {
            const resPut = await axios.put(`${apiUrl}/tasks/${taskToMod.id}`, taskToMod);
            const { success, message } = resPut.data;

            if (!success) {
                throw new Error(message);
            }
            console.log("Task modificato")
            await getTasks()

        } catch (error) {
            console.error("Errore nella modifica del task:", error.message);

        }
    }


    return { tasks, setTasks, infoSingoloTask, getTasks, addTask, removeTasks, updateTask }
}

export default useTasks
