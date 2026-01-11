import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "@/types";
import type { RootState } from "@/redux/store";
import {v4 as uuidv4} from "uuid"

interface InitialState {
    tasks: ITask[];
}

const initialState : InitialState = {
  tasks: [
    // {
    //   id: "t001",
    //   title: "Initialize Frontend",
    //   description: "Create Home page and routing",
    //   dueDate: "2026-11",
    //   isCompleted: false,
    //   priority: "High",
    // },
    // {
    //   id: "t002",
    //   title: "Github Collab",
    //   description: "Create github repo and initializing",
    //   dueDate: "2026-11",
    //   isCompleted: false,
    //   priority: "Low",
    // },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action : PayloadAction <ITask>) => {
        const id = uuidv4();
        const taskData = {
            ...action.payload,
            id,
            isCompleted: false,
        }
        state.tasks.push(taskData)
    }
  },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
