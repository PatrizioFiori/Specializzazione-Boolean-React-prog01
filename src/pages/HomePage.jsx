import React from 'react';

const HomePage = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Gestione dei Task</h1>
            <p className="lead text-center mb-4">
                Questa applicazione web consente di gestire i task in modo semplice ed efficiente, con filtri avanzati, ricerca ottimizzata, ordinamento personalizzato e conferme di azioni tramite modali. L'esperienza utente è stata progettata per essere fluida, garantendo prestazioni elevate.
            </p>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 1 - Setup e Routing</h3>
                    <p>Repo backend fornita da clonare e avviare. Creazione del frontend con Vite, configurazione del routing in App.jsx con React Router.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 2 - Setup Context API e Fetch Iniziale</h3>
                    <p>Impostazione di un file .env per l'URL dell'API e creazione del Context API globale per la gestione dei task, con fetch dei dati dal backend.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 3 - Lista dei Task (Pagina)</h3>
                    <p>Visualizzazione dei task in una tabella, ottimizzazione del rendering con React.memo() e applicazione di stili per la colonna "status".</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 4 - Custom Hook useTasks()</h3>
                    <p>Creazione di un hook personalizzato per il recupero e la gestione dei task, con le funzioni addTask, removeTask, e updateTask.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 5 - Creazione del Form per Aggiungere un Task</h3>
                    <p>Form per aggiungere un task con validazione del titolo e gestione dell'input tramite controlli specifici per ogni campo.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 6 - Integrazione dell'API per Aggiungere un Task</h3>
                    <p>Completamento della funzione addTask per inviare una POST all'API, gestione della risposta e feedback all'utente.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 7 - Pagina Dettaglio Task</h3>
                    <p>Creazione di una pagina di dettaglio per ogni task, con i dati del task visualizzati e la possibilità di eliminare il task.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 8 - Funzione di Eliminazione Task</h3>
                    <p>Funzione per eliminare i task tramite una chiamata DELETE, con gestione della risposta e rimozione dal contesto globale.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 9 - Modal & Conferma Eliminazione Task</h3>
                    <p>Creazione di una modale di conferma per l'eliminazione dei task, utilizzando React Portal per visualizzarla fuori dal DOM principale.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 10 - Modale e Funzione di Modifica Task</h3>
                    <p>Implementazione di una modale per la modifica dei task, con un form controllato e invio delle modifiche tramite PUT all'API.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 11 - Ordinamento delle Task</h3>
                    <p>Implementazione dell'ordinamento dinamico dei task nella tabella con React, gestendo l'ordine crescente e decrescente.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h3 className="h5 text-center">📌 Milestone 12 - Ricerca dei Task con Debounce</h3>
                    <p>Aggiunta della ricerca ottimizzata con debounce, per filtrare i task in tempo reale senza sovraccaricare le prestazioni.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
