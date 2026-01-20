import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { ITask } from "@/types";
import type { RootState } from "@/redux/store";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "ttodo0001",
      title: "Task Alpha",
      description: "This is a demo description for task alpha",
      priority: "medium",
      dueDate: "2026-01-14T18:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "ttodo00012",
      title: "Task Gama",
      description: "This is a demo description for task gama",
      priority: "high",
      dueDate: "2026-01-14T18:00:00.000Z",
      isCompleted: true,
    },
    {
      id: "ttodo000123",
      title: "Task Gama",
      description: "This is a demo description for task gama",
      priority: "low",
      dueDate: "2026-01-14T18:00:00.000Z",
      isCompleted: false,
    },
  ],
  filter: "all",
};

type DarftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DarftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //add task
    addTask: (state, action: PayloadAction<DarftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },

    //toggle switch based on task complete
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id == action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task,
      );
    },

    //dalete reducer

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    //update filter
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">,
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
