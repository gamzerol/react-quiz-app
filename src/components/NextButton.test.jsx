import { render, screen, fireEvent } from "@testing-library/react";
import NextButton from "./NextButton";

describe("NextButton component", () => {
  test("does not render if answer is null", () => {
    const { container } = render(
      <NextButton
        dispatch={jest.fn()}
        answer={null}
        index={0}
        numQuestions={5}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  test("renders Next button when not last question", () => {
    render(
      <NextButton dispatch={jest.fn()} answer={1} index={0} numQuestions={5} />,
    );

    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("dispatches nextQuestion on Next click", () => {
    const dispatch = jest.fn();

    render(
      <NextButton dispatch={dispatch} answer={1} index={0} numQuestions={5} />,
    );

    fireEvent.click(screen.getByText("Next"));

    expect(dispatch).toHaveBeenCalledWith({ type: "nextQuestion" });
  });

  test("renders Finish button on last question", () => {
    render(
      <NextButton dispatch={jest.fn()} answer={1} index={4} numQuestions={5} />,
    );

    expect(screen.getByText("Finish")).toBeInTheDocument();
  });

  test("dispatches finish action on Finish click", () => {
    const dispatch = jest.fn();

    render(
      <NextButton dispatch={dispatch} answer={1} index={4} numQuestions={5} />,
    );

    fireEvent.click(screen.getByText("Finish"));

    expect(dispatch).toHaveBeenCalledWith({ type: "finish" });
  });
});
