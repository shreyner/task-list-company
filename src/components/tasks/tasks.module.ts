import * as angular from "angular";
import {tasksComponent} from "./tasks.component";
import {taskTabs} from "./task-tabs/task-tabs.module";
import {TasksService} from "./tasks.service";

export const tasks = angular.module("tasks", [
    taskTabs,
])
    .component("tasks", tasksComponent)
    .service("tasksService", TasksService)
    .name;
