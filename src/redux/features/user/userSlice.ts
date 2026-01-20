import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "99d_8pa98wkpIJI6_FkDE",
      name: "Riyal",
    },
    {
      id: "99d_8a985wkpIlI6_FpDE",
      name: "Mubin",
    },
  ],
};

type DarftUser = Pick<IUser, "name">;

const createUser = (userData: DarftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DarftUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, actions: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== actions.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
