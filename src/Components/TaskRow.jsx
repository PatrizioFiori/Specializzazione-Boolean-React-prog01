import React, { useContext } from 'react';
import { TaskContext } from '../Context/GlobalContext';

const TaskRow = React.memo(() => {
    const { tasks } = useContext(TaskContext);
    console.log("ArrayObj dei tasks", tasks);

    return (
        <>
            {
                tasks && tasks.length > 0 ? (
                    tasks.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={
                                item.status === "To do" ? "bg-danger" :
                                    item.status === "Doing" ? "bg-warning" :
                                        item.status === "Done" ? "bg-success" : ""
                            }>
                                {item.status}
                            </td>
                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Nessun task attualmente disponibile</td>
                    </tr>
                )
            }

        </>
    );
});

export default TaskRow;
