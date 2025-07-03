import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const { setCoins } = cryptoSlice.actions;
export default cryptoSlice.reducer;
