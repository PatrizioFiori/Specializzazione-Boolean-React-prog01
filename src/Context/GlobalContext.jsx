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




/*

Creare un Context API (GlobalContext) per gestire 
lo stato globale dell'applicazione.

Definire uno useState all'interno del provider, 
per memorizzare la lista dei task.

Effettuare una richiesta GET a /tasks al caricamento dell'app, 
utilizzando useEffect, e salvare i dati nello stato.

Stampare in console i dati ricevuti per verificare 
il corretto recupero delle informazioni.

Rendere disponibile il GlobalContext.Provider in App.jsx, 
avvolgendo l'intera applicazione.
*/