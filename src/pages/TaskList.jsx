import React, { useState, useContext } from 'react';
import TaskRow from '../Components/TaskRow';
import EditTaskModal from '../Components/EditTaskModal';
import { TaskContext } from '../Context/GlobalContext';

const TaskList = () => {
    const { tasks, updateTask } = useContext(TaskContext);
    const [show, setShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleEditClick = (task) => {
        setSelectedTask(task);
        setShow(true);
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Tabella dei Task</h2>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Data creazione</th>
                            <th>Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskRow tasks={tasks} onEditClick={handleEditClick} />
                    </tbody>
                </table>
            </div>

            <EditTaskModal
                show={show}
                onClose={() => setShow(false)}
                task={selectedTask}
                onSave={(updatedTask) => {
                    updateTask(updatedTask);
                    setShow(false);
                }}
            />
        </>
    );
};

export default TaskList;
