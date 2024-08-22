import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./appSlice";

export const selectDomain = (state) => state.app || initialState;

export const selectIsLoading = createSelector(
  [selectDomain],
  (state) => state.loading
);

export const selectPage = createSelector([selectDomain], (state) => state.page);

export const selectMovies = createSelector(
  [selectDomain],
  (state) => state.movies
);
