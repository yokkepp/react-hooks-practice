import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import reducer from "../reducers/index";
import Events from "./Events";
import EventForm from "./EventForm";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </>
  );
};

export default App;
