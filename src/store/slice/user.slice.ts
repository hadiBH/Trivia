import { createSlice } from "@reduxjs/toolkit";
export interface statsInterface {
  [key: string]: {
    numberOfTests: number;
    correctAnswers: number;
    numOfQuestions: number;
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

    update(state, action) {
      const { category, score, numOfQuestions } = action.payload;
      if (category in state.stats) {
        state.stats[category].numberOfTests += 1;
        state.stats[category].correctAnswers += score;
        state.stats[category].numOfQuestions += numOfQuestions;
      } else {
        state.stats[category] = {
          numberOfTests: 1,
          correctAnswers: score,
          numOfQuestions: numOfQuestions,
        };
      }
    },
  },
});

export const UserAction = UserSlice.actions;
export default UserSlice.reducer;
