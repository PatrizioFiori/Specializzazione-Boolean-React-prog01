# Specializzazione boolean react progetto 01 "React task manager"

Creazione di una web app di gestione dei task. L'app dovrà supportare filtri avanzati, ricerca ottimizzata, ordinamento e conferme di azione con modali. Inoltre, dovrà garantire un'esperienza fluida con prestazioni ottimizzate.


### 📌 Milestone 1 - Setup e Routing
Repo backend fornita da clonare e avviare.
Crea il progetto frontend con Vite, installa react-router-dom, configura il routing in App.jsx con BrowserRouter e definisci due pagine: TaskList.jsx (lista task) e AddTask.jsx (aggiunta task).
Aggiungi una navbar con NavLink e imposta le rotte con Routes e Route.


### 📌 Milestone 2 - Setup Context API e Fetch Iniziale
Imposta un file .env per salvare l’URL dell’API e crea un Context API globale per gestire la lista dei task.
Usa useState e useEffect nel provider per effettuare una chiamata GET /tasks e salvare i dati nello stato.
Avvolgi l’intera app con il GlobalContext.Provider e stampa i dati in console per verificarne la corretta ricezione.

### 📌 Milestone 3 - Lista dei Task (Pagina)
Visualizzare l'elenco dei task in una tabella. Recuperare i task dal GlobalContext e mostrarli in TaskList.jsx, utilizzando un componente TaskRow.jsx per ogni riga. Applicare stili diversi per la colonna "status" (rosso per "To do", giallo per "Doing", verde per "Done") e ottimizzare il rendering con React.memo() su TaskRow.

### 📌 Milestone 4 - Custom Hook useTasks()
Creare un hook personalizzato che recupera i task con una GET da /tasks e li salva in uno stato locale.
All'interno dell'hook definire anche le funzioni addTask, removeTask e updateTask (vuote per ora).
Restituire tasks e le funzioni dall'hook e integrarlo nel GlobalContext per l'accesso globale.