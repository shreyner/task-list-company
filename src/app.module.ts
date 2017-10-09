import * as angular from "angular";
import {AppComponent} from "./app.component";
import {commons} from "./common/common";
import {components} from "./components/components";

export const App = angular.module("App", [
    commons,
    components,
])
    .component("app", AppComponent)
    .name;
