import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { handleToggle } from "./todoSlice";
import { getTodoReq } from "./todoSliceApi";

function App() {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);

  return (
    <div className="App">
      <button onClick={() => dispatch(getTodoReq())}>hit</button>
      <p>{JSON.stringify(todo)}</p>
    </div>
  );
}

export default App;
