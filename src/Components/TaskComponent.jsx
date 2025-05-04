import React, { useContext } from 'react'
import { TaskContext } from '../Context/GlobalContext'

const TaskComponent = () => {
    const { res } = useContext(TaskContext)
    console.log("ArrayRes", res)


    return (
        <div>{res.map(item => (
            <p>{item.title}</p>
        ))}</div>
    )
}

export default TaskComponent

/*
{
    "title": "Comprare il latte",
    "description": "Supermercato sotto casa",
    "status": "To do",
    "id": 1,
    "createdAt": "2025-05-04T09:35:19.698Z"
}
*/