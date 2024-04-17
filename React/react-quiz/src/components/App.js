import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
// import DateCounter from "./DateCounter";

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0, // index of the current question
  answer: null, // answer selected by the user
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index); // get the current question
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption // if the answer is correct
            ? state.points + question.points // add the points to the total
            : state.points, // otherwise, stay the same
      };
    default:
      throw new Error("Unkonwn Action");
  }
}

export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const noOfQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen noOfQuestions={noOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}
