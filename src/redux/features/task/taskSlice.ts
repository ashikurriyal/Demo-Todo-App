import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "@/types";

interface InitialState {
    task: ITask[];
}

const initialState : InitialState = {
  task: [
    {
      id: "t001",
      title: "Initialize Frontend",
      description: "Create Home page and routing",
      dueDate: "2026-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "t002",
      title: "Github Collab",
      description: "Create github repo and initializing",
      dueDate: "2026-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
