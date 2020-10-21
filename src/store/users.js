import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },

  //reducers
  reducers: {
    usersRequested: (dogs, action) => {
      users.loading = true;
    },
    usersReceived: (dogs, action) => {
      users.list = action.payload;
      users.loading = false;
      users.lastFetch = Date.now();
    },
    userAdded: (dogs, action) => {
      users.list.push(action.payload);
    },
    usersRequestFailed: (dogs, action) => {
      users.loading = false;
    },
  },
});

const {
  usersRequested,
  usersReceived,
  userAdded,
  usersRequestFailed,
} = slice.actions;

export default slice.reducer;
