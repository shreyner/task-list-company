import * as angular from "angular";
import {listHeroes} from "./list-heroes/list-heroes.module";
import {tasks} from "./tasks/tasks.module";

export const components = angular.module("app.components", [
    listHeroes,
    tasks,
]).name;
