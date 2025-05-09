import React, { useState, useContext, useEffect, useMemo } from 'react';
import TaskRow from '../Components/TaskRow';
import EditTaskModal from '../Components/EditTaskModal';
import { TaskContext } from '../Context/GlobalContext';

const TaskList = () => {
    const { tasks, updateTask } = useContext(TaskContext);

    const [show, setShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [sortOrder, setSortOrder] = useState(1)
    const [sortBy, setSortBy] = useState("createdAt")

    const handleEditClick = (task) => {
        setSelectedTask(task);
        setShow(true);
    };

    const handleSort = (sort) => {
        if (sort !== sortBy) {
            setSortOrder(1)
        } else {
            setSortOrder(prev => prev * -1)
        }
        setSortBy(sort)
    }

    const sortedTasks = useMemo(() => {
        const statusOrder = { "To do": 1, "Doing": 2, "Done": 3 };

        const copy = [...tasks]

        if (sortBy === "task") {
            copy.sort((a, b) => {
                const diff = a.title.localeCompare(b.title)
                return sortOrder === 1 ? diff : -diff
            })
        }
        else if (sortBy === "status") {
            copy.sort((a, b) => {
                const diff = statusOrder[a.status] - statusOrder[b.status]
                return sortOrder === 1 ? diff : -diff
            })
        }

        else if (sortBy === "createdAt") {
            copy.sort((a, b) => {
                const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                return sortOrder === 1 ? diff : -diff
            })
        }

        return copy
    }, [tasks, sortBy, sortOrder])

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Tabella dei Task</h2>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>
                                <button
                                    onClick={() => handleSort("task")}
                                    className="btn btn-link text-white text-decoration-none p-0"
                                >
                                    Task {sortBy === "task" && (sortOrder === 1 ? "↑" : "↓")}
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => handleSort("status")}
                                    className="btn btn-link text-white text-decoration-none p-0"
                                >
                                    Status {sortBy === "status" && (sortOrder === 1 ? "↑" : "↓")}
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => handleSort("createdAt")}
                                    className="btn btn-link text-white text-decoration-none p-0"
                                >
                                    Data creazione {sortBy === "createdAt" && (sortOrder === 1 ? "↑" : "↓")}
                                </button>
                            </th>
                            <th>Azioni</th>
                        </tr>

                    </thead>
                    <tbody>
                        <TaskRow tasks={sortedTasks} onEditClick={handleEditClick} />
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