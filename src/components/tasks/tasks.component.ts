import * as angular from "angular";
import {TasksController} from "./tasks.controller";
import templatePug from "./tasks.pug";
import Bootstrap from "bootstrap/scss/bootstrap.scss";

export const tasksComponent: angular.IComponentOptions = {
    template: templatePug({bootstrap: Bootstrap}),
    controller: TasksController,
    controllerAs: "$ctrl",
};
