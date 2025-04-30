import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModeState {
  isDarkMode: boolean;
}

const initialState: ModeState = {
  isDarkMode: false,
};

export const modeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setDarkMode } = modeSlice.actions;

export default modeSlice.reducer;
