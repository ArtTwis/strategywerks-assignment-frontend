import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  movies: [],
  page: 1,
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      let { payload } = action;
      payload = payload?.map((item) => ({ ...item, _id: nanoid() }));
      state.movies = [...state.movies, ...payload];
    },
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
