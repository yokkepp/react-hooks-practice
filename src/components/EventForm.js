import React, { useState } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    console.log({ state });
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const action = {
      type: DELETE_ALL_EVENTS,
    };

    const result = window.confirm(
      "本当に全てのイベントを削除してよろしいですか？"
    );
    if (result) dispatch(action);
  };

  const unCreatable = title === "" || body === "";
  const unAllDeletable = state.length === 0;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          ></input>
        </div>
      </form>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">ボディ</label>
          <textarea
            className="form-control"
            id="formEventTitle"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </div>
      </form>
      <button
        id="addEventButton"
        className="btn btn-primary"
        onClick={addEvent}
        disabled={unCreatable}
      >
        イベントを作成する
      </button>
      <button
        className="btn btn-danger"
        onClick={deleteAllEvents}
        disabled={unAllDeletable}
      >
        全てのイベントを削除する
      </button>
    </>
  );
};

export default EventForm;
