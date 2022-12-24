import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import reducer from "../reducers/index";
import Events from "./Events";
import EventForm from "./EventForm";
import AppContext from "../contexts/AppContext";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"Hello, I am a Provider"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
