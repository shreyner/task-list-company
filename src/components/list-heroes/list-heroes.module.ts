import * as angular from "angular";
import {listHeroesComponent} from "./list-heroes.component";

export const listHeroes = angular.module("listHeroes", [])
    .component("listHeroes", listHeroesComponent)
    .name;
