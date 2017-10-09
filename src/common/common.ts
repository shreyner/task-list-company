import * as angular from "angular";
import {navbarMain} from "./navbar/navbar.module";

export const commons = angular.module("app.commons", [
    navbarMain,
]).name;
