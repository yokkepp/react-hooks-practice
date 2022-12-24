import React from "react";
import { DELETE_EVENT } from "../actions";

const Event = ({ dispatch, event }) => {
  const id = event.id;

  const handleClickDeleteButton = () => {
    const action = { type: DELETE_EVENT, id };
    const result = window.confirm(
      `本当にイベント（id=${id}）削除してもよいですか？`
    );
    if (result) dispatch(action);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
