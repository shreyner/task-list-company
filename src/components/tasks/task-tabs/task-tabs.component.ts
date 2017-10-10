import {IComponentOptions} from "angular";
import Bootstrap from "bootstrap/scss/bootstrap.scss";
import className from "classnames/bind";

const styles = className.bind(Bootstrap);

const layout = `
<ul class="${styles("nav", "nav-tabs")}">
  <li class="${styles("nav-item")}">
    <a class="${styles("nav-link", {active: true})}" href="#">Новые</a>
  </li>
  <li class="${styles("nav-item")}">
    <a class="${styles("nav-link", {active: false})}" href="#">В работе</a>
  </li>
  <li class="${styles("nav-item")}">
    <a class="${styles("nav-link", {active: false})}" href="#">На рассмотрении</a>
  </li>
  <li class="${styles("nav-item")}">
    <a class="${styles("nav-link", {active: false})}" href="#">Выполнены</a>
  </li>
  <li class="${styles("nav-item")}">
    <a class="${styles("nav-link", {active: false})}" href="#">Отменены</a>
  </li>
  <li class="${styles("nav-item")}">
    <a class="${styles("nav-link", {active: false})}" href="#">Черновики</a>
  </li>
</ul>
`;

export const taskTabsComponent: IComponentOptions = {
    template: layout,
};
