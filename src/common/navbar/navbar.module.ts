import * as angular from "angular";
import {navbarComponent} from "./navbar.component";

export const navbarMain = angular.module("navbarMain", [
])
    .component("navbarMain", navbarComponent)
    .name;
