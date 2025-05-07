import React from 'react';

const TaskRow = React.memo(({ tasks, onEditClick }) => {
    return (
        <>
            {
                tasks && tasks.length > 0 ? (
                    tasks.map(item => (
                        <tr key={item.id}>
                            <td>
                                {item.id} - <a className='text-dark' href={`/TaskDetail/${item.id}`}>{item.title}</a>
                            </td>
                            <td className={
                                item.status === "To do" ? "bg-danger" :
                                    item.status === "Doing" ? "bg-warning" :
                                        item.status === "Done" ? "bg-success" : ""
                            }>
                                {item.status}
                            </td>
                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => onEditClick(item)} className="btn btn-warning btn-sm me-2">MODIFY</button>
                                <button className="btn btn-danger btn-sm">DELETE</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">Nessun task attualmente disponibile</td>
                    </tr>
                )
            }
        </>
    );
});

export default TaskRow;
