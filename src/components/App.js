import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer } from "react";
import reducer from "../reducers";
import Events from "./Events";
import EventForm from "./EventForm";
import OperationLogs from "./OperationLogs";
import AppContext from "../contexts/AppContext";

const APP_KEY = "appWithRedux";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);

  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const string = JSON.stringify(state);
    localStorage.setItem(APP_KEY, string);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
