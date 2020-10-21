import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallStarted } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "dogs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },

  //reducers
  reducers: {
    dogsRequested: (dogs, action) => {
      dogs.loading = true;
    },
    dogsReceived: (dogs, action) => {
      dogs.list = action.payload;
      dogs.loading = false;
      dogs.lastFetch = Date.now();
    },
    dogAdded: (dogs, action) => {
      dogs.list.push(action.payload);
    },
    dogsRequestFailed: (dogs, action) => {
      dogs.loading = false;
    },
  },
});

const {
  dogsRequested,
  dogsReceived,
  dogAdded,
  dogsRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action Creators
const url = "/dogs";

export const loadDogs = () => (dispatch, getState) => {
  // const { lastFetch } = getState().entities.dogs;
  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  // if (diffInMinutes < 8) return;

  return dispatch(
    apiCallStarted({
      url,
      onStart: dogsRequested.type,
      onSuccess: dogsReceived.type,
      onError: dogsRequestFailed.type,
    })
  );
};

export const addDog = (dog) =>
  apiCallStarted({
    url,
    method: "post",
    data: dog,
    onSuccess: dogAdded.type,
  });

// Selectors

export const getAllDogs = (state) => state.entities.dogs.list;
