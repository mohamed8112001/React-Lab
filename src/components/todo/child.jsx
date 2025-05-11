const Child = ({newTodo,todos,handleDelete,handleDone})=>{
    // console.log(props)
    
    return(<table className="table mt-4">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td
                className={todo.done ? "text-decoration-line-through" : ""}
              >
                {todo.task}
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn btn-success" onClick={() => handleDone(index)}>
                  {todo.done ? "Undo" : "Done"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>)
}



export default Child