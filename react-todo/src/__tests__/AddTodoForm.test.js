import { fireEvent } from "@testing-library/react";
import { render } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

test("calls onAddTodo with the correct text when form is submitted", () => {
    const mockOnAddTodo = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    const input = getByPlaceholderText("Add a new todo");
    const button = getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(mockOnAddTodo).toHaveBeenCalledWith("New Todo");
});