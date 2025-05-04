import TaskRow from '../Components/TaskRow';

const TaskList = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Tabella dei Task</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Data creazione</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskRow />
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
