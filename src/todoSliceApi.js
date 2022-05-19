import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoReq = createAsyncThunk("todo/get", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
});
