import { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;

        setTodos([...todos, { task: newTodo, done: false }]);
        setNewTodo("");
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleDone = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, done: !todo.done } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm">
                <h1 className="text-center text-primary mb-3">To-Do App!</h1>
                <p className="text-muted text-center mb-4">Add New To-Do</p>

                <form className="d-flex gap-2 justify-content-center" onSubmit={handleAdd}>
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Enter a task..."
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success">
                        Add
                    </button>
                </form>
                <Child newTodo={newTodo} todos={todos} handleAdd={handleAdd} handleDelete={handleDelete} handleDone={handleDone} />

            </div>
        </div>
    );
};

export default Parent;
