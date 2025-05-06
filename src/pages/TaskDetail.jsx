import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TaskContext } from "../Context/GlobalContext"
import Modal from "../Components/Modal";


const TaskDetail = () => {
    const { id } = useParams();
    const { tasks, getTasks, removeTasks } = useContext(TaskContext);
    const [taskDetail, setTaskDetail] = useState(null);
    const [show, setShow] = useState(false)
    const navigate = useNavigate();



    useEffect(() => {
        getTasks();
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            const task = tasks.find(t => t.id === parseInt(id))
            setTaskDetail(task)
        }

    }, [tasks, id])

    async function handleConfirmDelete() {
        await removeTasks(taskDetail.id);
        await getTasks();
        navigate("/TaskList");
    }

    return (
        <>
            <div className="container mt-4">
                {taskDetail ? (
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="card-title mb-3">{taskDetail.title}</h1>
                            <p className="card-text mb-2"><strong>Description:</strong> {taskDetail.description}</p>
                            <p className="card-text mb-2"><strong>Status: </strong>
                                <span className={`badge ${taskDetail.status === "Done" ? "bg-success" : taskDetail.status === "Doing" ? "bg-warning" : "bg-danger"}`}>
                                    {taskDetail.status}
                                </span>
                            </p>
                            <p className="card-text mb-2"><strong>Created At:</strong> {new Date(taskDetail.createdAt).toLocaleDateString()}</p>
                            <button
                                onClick={() => setShow(true)}
                                className="btn btn-danger mt-3"
                            >
                                Elimina
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Caricamento in corso...</span>
                        </div>
                    </div>
                )}
            </div>
            <Modal
                title="Conferma Eliminazione"
                content="Sei sicuro di voler eliminare il task:"
                taskTitle={taskDetail?.title}
                show={show}
                onClose={() => setShow(false)}
                onConfirm={handleConfirmDelete}
            />
        </>

    );
};



export default TaskDetail