import { render, screen, fireEvent } from "@testing-library/react";
import Options from "./Options";

const mockQuestion = {
  options: ["Angular", "React", "Vue"],
};

describe("Options component", () => {
  test("renders all options", () => {
    render(
      <Options question={mockQuestion} dispatch={jest.fn()} answer={null} />,
    );

    mockQuestion.options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test("dispatches newAnswer action when option is clicked", () => {
    const dispatch = jest.fn();

    render(
      <Options question={mockQuestion} dispatch={dispatch} answer={null} />,
    );

    fireEvent.click(screen.getByText("React"));

    expect(dispatch).toHaveBeenCalledWith({
      type: "newAnswer",
      payload: 1, // index
    });
  });

  test("disables buttons after answering", () => {
    render(<Options question={mockQuestion} dispatch={jest.fn()} answer={1} />);

    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });
});
