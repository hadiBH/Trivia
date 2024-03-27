import { createSlice } from "@reduxjs/toolkit";
export interface statsInterface {
  [key: string]: {
    numberOfTests: number;
    correctAnswers: number;
  };
}
export interface UserState {
  isAuth: boolean;
  name: string;
  stats: statsInterface;
}

export const initialUserState: UserState = {
  isAuth: false,
  name: "",
  stats: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.name = action.payload;
    },
    logout(state) {
      state.isAuth = false;
    },
    startTest(state, action) {
      if (action.payload in state.stats) {
        state.stats[action.payload].numberOfTests += 1;
      } else {
        state.stats[action.payload] = {
          numberOfTests: 1,
          correctAnswers: 0,
        };
      }
    },

    update(state, action) {
      const { category, score } = action.payload;
      console.log(category, score);

      state.stats[category].correctAnswers += score;
    },
  },
});

export const UserAction = UserSlice.actions;
export default UserSlice.reducer;
