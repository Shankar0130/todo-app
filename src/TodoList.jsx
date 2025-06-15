

function TodoList({tasks,deleteTask}) {
    if (!Array.isArray(tasks)) return null;

    if(tasks.length === 0) return (
        <p>No Tasks yet , Please add tasks</p>
    );


    return (
        <ul>
        {
            tasks.map((t,i) => (
                <li key={i}>
                <strong>{i+1}.</strong>
                {t}
                <button
            style={{ marginLeft: '10px', color: 'red' }}
            onClick={() => deleteTask(i)}
          >
            Delete
          </button>
                </li>
            ))
        }
        </ul>
    );
}

export default TodoList;