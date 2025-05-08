import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TaskContext } from "../Context/GlobalContext"


const EditTaskModal = ({ show, onClose, task, onSave }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const formRef = useRef();

    useEffect(() => {
        if (task) {
            setTitle(task.title || "");
            setDescription(task.description || "");
            setStatus(task.status || "");
        }
    }, [task]);


    if (!show) return null


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTask = { ...task, title, description, status };
        onSave(updatedTask);
    };


    return (
        <>
            {/* Backdrop oscurato */}
            <div className="modal-backdrop fade show"></div>

            {/* Modale centrata */}
            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex flex-column align-items-start gap-1">
                            <h5 className="modal-title">Modifica il task:</h5>


                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="d-flex flex-column gap-3 mb-3 px-4 w-100">

                            <form
                                onSubmit={handleSubmit}
                                ref={formRef}
                            >
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Titolo"
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                                <textarea
                                    className="form-control mb-3"
                                    placeholder="Descrizione"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}

                                />
                                <select
                                    className="form-select mb-3"
                                    value={status}
                                    onChange={(e) => { setStatus(e.target.value) }}
                                >
                                    <option value="" disabled>Seleziona lo stato</option>
                                    <option className="bg-danger" value="To do">To do</option>
                                    <option className="bg-warning" value="Doing">Doing</option>
                                    <option className="bg-success" value="Done">Done</option>
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => formRef.current.requestSubmit()}
                                type="button"
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                            <button onClick={onClose} type="button" className="btn btn-secondary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTaskModal
