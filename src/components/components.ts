import * as angular from "angular";
import {listHeroes} from "./list-heroes/list-heroes.module";

export const components = angular.module("app.components", [
    listHeroes,
]).name;
