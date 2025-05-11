import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const languagelice = createSlice({
  name: "language",
  initialState: {
    currentLang: "en",
    avaliableLangs: ["ar", "en", "fr"],
  },
  reducers: {
    updateCurrentLang: (state, action) => {
      state.currentLang = action.payload;
    },
  },
});

export const { updateCurrentLang } = languagelice.actions;

export default languagelice.reducer;
