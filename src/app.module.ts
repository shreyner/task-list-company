import * as angular from "angular";
import {AppComponent} from "./app.component";
import {commons} from "./common/common";
import {components} from "./components/components";
import {services} from "./service/services";

export const App = angular.module("App", [
    commons,
    components,
    services
])
    .component("app", AppComponent)
    .name;
