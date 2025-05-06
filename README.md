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

### 📌 Milestone 5 - Creazione del Form per Aggiungere un Task
Creazione di un form per aggiungere un task, con un input per il titolo (controllato), una textarea per la descrizione (non controllata), e un select per lo stato (non controllato). Il titolo deve essere validato per evitare valori vuoti e simboli speciali. Alla pressione del bottone "Aggiungi Task", i dati devono essere stampati in console senza inviare la richiesta all'API.

### 📌 Milestone 6 - Integrazione dell'API per Aggiungere un Task (POST)
Completare la funzione addTask per inviare una POST a /tasks con title, description e status.
Gestire la risposta controllando success: se true, aggiornare lo stato; se false, lanciare un errore con message.
Nel form AddTask, richiamare addTask al submit con i dati del form.
Mostrare un alert in caso di successo o errore e resettare il form se la creazione va a buon fine.

### 📌 Milestone 7 - Pagina Dettaglio Task
Creare TaskDetail.jsx per visualizzare nome, descrizione, stato e data di creazione di un task.
Aggiornare TaskRow.jsx per rendere il titolo del task un link a /task/:id.
Modificare App.jsx per aggiungere la rotta /task/:id che carica TaskDetail.jsx.
Aggiungere un bottone "Elimina Task" che stampa "Elimino task" in console.

### 📌 Milestone 8 - Funzione di Eliminazione Task (DELETE)
Implementa removeTask(taskId) con una chiamata DELETE /tasks/:id e gestisci success o message dalla risposta.
Se success, aggiorna lo stato rimuovendo il task; se false, lancia errore.
In TaskDetail.jsx, al click su "Elimina", conferma, chiama removeTask, mostra un alert e reindirizza alla lista.

### 📌 Milestone 9 - Modal & Conferma Eliminazione Task
Crea un componente Modal.jsx riutilizzabile con title, content, show, onClose, onConfirm e confirmText.
Usa ReactDOM.createPortal per renderlo fuori dal DOM principale e mostra i bottoni "Annulla" e "Conferma".
Integra la modale in TaskDetail.jsx per confermare l’eliminazione di un task cliccando su "Elimina Task".