import React, { useContext, useRef, useState } from 'react'
import { TaskContext } from '../Context/GlobalContext';

const AddTask = () => {

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";
    const { addTask } = useContext(TaskContext);

    function handleSubmit(e) {
        e.preventDefault()

        if (!title || [...title].some(char => symbols.includes(char))) {
            console.log("Il titolo non può essere lasciato vuoto e non può contenere simboli");
            return;
        }

        const task =
        {
            title: title,
            description: refDescription.current.value,
            status: refStatus.current.value,
        }

        console.log(task)
        addTask(task)
        resetOrTest("reset")

    }

    function resetOrTest(mode) {
        const isTest = mode === "test";

        setTitle(isTest ? "Rinnovare abbonamento Netflix" : "");
        refDescription.current.value = isTest ? "L'abbonamento è scaduto e va rinnovato" : "";
        refStatus.current.value = isTest ? "To do" : "";
    }


    const refDescription = useRef("")
    const refStatus = useRef("")
    const [title, setTitle] = useState("")


    return (
        <>
            <div className="p-5 d-flex flex-column align-items-center text-center">
                <h1 className="pb-3">{title || "Inserisci un nuovo task"}</h1>

                <div className="d-flex flex-column gap-3 mb-3 align-items-center w-100">
                    <form onSubmit={(e) => handleSubmit(e)} className="w-50">
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Titolo"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className="form-control mb-3"
                            placeholder="Descrizione"
                            ref={refDescription}
                        />

                        <select className="form-select mb-3" ref={refStatus} defaultValue="">
                            <option value="" disabled>Seleziona lo stato</option>
                            <option className="bg-danger" value="To do">To do</option>
                            <option className="bg-warning" value="Doing">Doing</option>
                            <option className="bg-success" value="Done">Done</option>
                        </select>

                        <div className="d-flex gap-3 mt-4 justify-content-center">
                            <button type="submit" className="btn btn-success border-black px-4 py-2">Add Task</button>
                            <button type="button" onClick={() => resetOrTest("reset")} className="btn btn-danger border-black px-4 py-2">Reset</button>
                            <button type="button" onClick={() => resetOrTest("test")} className="btn btn-warning border-black px-4 py-2">TEST</button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}

export default AddTask