import * as angular from "angular";
import {taskTabsComponent} from "./task-tabs.component";

export const taskTabs = angular.module("taskTabs", [])
    .component("taskTabs", taskTabsComponent)
    .name;
