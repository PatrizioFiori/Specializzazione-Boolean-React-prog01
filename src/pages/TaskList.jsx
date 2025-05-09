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
    const [searchQuery, setSearchQuery] = useState("")
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");


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

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery)
        }, 500);

        return () => clearTimeout(timer)

    }, [searchQuery])



    const sortedTasks = useMemo(() => {
        const statusOrder = { "To do": 1, "Doing": 2, "Done": 3 };
        const copy = [...tasks];

        if (debouncedSearchQuery) {
            return copy.filter(item =>
                item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
            );
        }

        const sortFunctions = {
            task: (a, b) => a.title.localeCompare(b.title),
            status: (a, b) => statusOrder[a.status] - statusOrder[b.status],
            createdAt: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        };

        if (sortBy in sortFunctions) {
            copy.sort(sortFunctions[sortBy]);
        }

        return sortOrder === 1 ? copy : copy.reverse();
    }, [tasks, sortBy, sortOrder, debouncedSearchQuery]);


    return (
        <>
            <div className="container mt-5">
                <div className="bg-dark py-3 px-4">
                    <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                        <h2 className="m-0 text-center text-md-start"><a className='text-decoration-none text-white' href="/TaskList">Tabella dei Task</a></h2>
                        <input
                            type="text"
                            className="form-control w-75 w-md-50"
                            placeholder="Ricerca un task per nome"
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value) }}
                        />
                    </div>
                </div>

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