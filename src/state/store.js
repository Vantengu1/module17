import { createStore } from "effector";
import { addTask } from "./events";

export const tasksStore = createStore([])
    .on(addTask, (state, task) => [...state, task]);