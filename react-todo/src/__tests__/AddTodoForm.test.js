import { render, screen , fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";
import "@testing-library/jest-dom/extend-expect";

test("calls onAddTodo with the correct text when form is submitted", () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    const input = getByPlaceholderText("Add a new todo");
    const button = getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(mockOnAddTodo).toHaveBeenCalledWith("New Todo");
});

function getByPlaceholderText(placeholder) {
    return screen.getByPlaceholderText(placeholder);
}

function getByText(text) {
    return screen.getByText(text);
}