import { render, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders todos and handles toggle and delete actions", () => {
    const mockTodos = [
        { id: 1, text: "Todo 1", completed: false },
        { id: 2, text: "Todo 2", completed: true },
    ];
    const mockOnToggleTodo = jest.fn();
    const mockOnDeleteTodo = jest.fn();

    render(
        <TodoList
            todos={mockTodos}
            onToggleTodo={mockOnToggleTodo}
            onDeleteTodo={mockOnDeleteTodo}
    />
    );

    mockTodos.forEach((todo) => {
        expect(getByText(todo.text)).toBeInTheDocument();
    });

    fireEvent.click(getByText("Todo 1"));
    expect(mockOnToggleTodo).toHaveBeenCalledWith(1);

    fireEvent.click(getByText("Delete"));
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(1);
});

