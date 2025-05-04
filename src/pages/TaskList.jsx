import React, { useContext } from 'react';
import { TaskContext } from '../Context/GlobalContext';
import TaskRow from '../Components/TaskRow';  // Importa TaskRow

const TaskList = () => {
    const { res } = useContext(TaskContext);  // Ottieni i dati dal contesto
    console.log("ArrayRes", res);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Tabella dei Task</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Data creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Qui usiamo TaskRow per rendere ogni riga della tabella */}
                    <TaskRow />
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
