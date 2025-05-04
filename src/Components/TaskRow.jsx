import React, { useContext } from 'react';
import { TaskContext } from '../Context/GlobalContext';

const TaskRow = () => {
    const { res } = useContext(TaskContext);
    console.log("ArrayRes", res);

    return (
        <>
            {res.map(item => (
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
            ))}
        </>
    );
}

export default TaskRow;
