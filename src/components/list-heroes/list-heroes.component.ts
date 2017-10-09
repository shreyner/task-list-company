import * as angular from "angular";
import styles from "./list-heroes.scss";
import {ListHeroesController} from "./list-heroes.controller";

const layout = `
<ul class="${styles.item}">
  <li ng-repeat="hero in $ctrl.heroes">{{hero.name}}</li>
</ul>
`;

export const listHeroesComponent: angular.IComponentOptions = {
    template: layout,
    controller: ListHeroesController,
    controllerAs: "$ctrl",
};
