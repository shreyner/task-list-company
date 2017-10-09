import {IComponentOptions} from "angular";
import Bootstrap from "bootstrap/scss/bootstrap.scss";
// import styles from "./navbar.scss";
import {NavbarController} from "./navbar.controller";

const layout = `
  <a class="${Bootstrap["navbar-brand"]}" href="#">taskon</a>
`;

export const navbarComponent: IComponentOptions = {
    template: layout,
    controller: NavbarController,
};
