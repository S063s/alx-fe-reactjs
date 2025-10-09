function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span
                        onClick={() => onToggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;