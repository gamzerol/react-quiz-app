import { reducer, initialState, SECONDS_PER_QUESTION } from "./reducer";

const mockQuestions = [
  {
    correctOption: 1,
    points: 10,
  },
  {
    correctOption: 0,
    points: 20,
  },
];

describe("quiz reducer", () => {
  test("should set questions and status to ready when data is received", () => {
    const action = {
      type: "dataReceived",
      payload: mockQuestions,
    };

    const state = reducer(initialState, action);

    expect(state.questions).toEqual(mockQuestions);
    expect(state.status).toBe("ready");
  });

  test("should set status to error when data fetch fails", () => {
    const state = reducer(initialState, { type: "dataFailed" });

    expect(state.status).toBe("error");
  });

  test("should start quiz and set secondsRemaining correctly", () => {
    const stateWithQuestions = {
      ...initialState,
      questions: mockQuestions,
      status: "ready",
    };

    const state = reducer(stateWithQuestions, { type: "start" });

    expect(state.status).toBe("active");
    expect(state.secondsRemaining).toBe(
      mockQuestions.length * SECONDS_PER_QUESTION,
    );
  });

  test("should add points for correct answer", () => {
    const state = {
      ...initialState,
      questions: mockQuestions,
      index: 0,
      points: 0,
    };

    const newState = reducer(state, {
      type: "newAnswer",
      payload: 1,
    });

    expect(newState.answer).toBe(1);
    expect(newState.points).toBe(10);
  });

  test("should NOT add points for wrong answer", () => {
    const state = {
      ...initialState,
      questions: mockQuestions,
      index: 0,
      points: 0,
    };

    const newState = reducer(state, {
      type: "newAnswer",
      payload: 0,
    });

    expect(newState.points).toBe(0);
  });

  test("should move to next question and reset answer", () => {
    const state = {
      ...initialState,
      index: 0,
      answer: 1,
    };

    const newState = reducer(state, { type: "nextQuestion" });

    expect(newState.index).toBe(1);
    expect(newState.answer).toBe(null);
  });

  test("should finish quiz and update highscore if points are higher", () => {
    const state = {
      ...initialState,
      points: 30,
      highscore: 10,
    };

    const newState = reducer(state, { type: "finish" });

    expect(newState.status).toBe("finished");
    expect(newState.highscore).toBe(30);
  });

  test("should restart quiz but keep questions", () => {
    const state = {
      ...initialState,
      questions: mockQuestions,
      status: "finished",
      points: 20,
    };

    const newState = reducer(state, { type: "restart" });

    expect(newState.status).toBe("ready");
    expect(newState.points).toBe(0);
    expect(newState.questions).toEqual(mockQuestions);
  });

  test("should decrease timer on tick", () => {
    const state = {
      ...initialState,
      secondsRemaining: 10,
      status: "active",
    };

    const newState = reducer(state, { type: "tick" });

    expect(newState.secondsRemaining).toBe(9);
  });

  test("should finish quiz when timer reaches zero", () => {
    const state = {
      ...initialState,
      secondsRemaining: 0,
      status: "active",
    };

    const newState = reducer(state, { type: "tick" });

    expect(newState.status).toBe("finished");
  });
});
