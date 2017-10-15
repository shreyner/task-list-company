import {IComponentOptions} from "angular";
import Bootstrap from "bootstrap/scss/bootstrap.scss";
import {NavbarController} from "./navbar.controller";
import templatePug from "./navbar.pug";

export const navbarComponent: IComponentOptions = {
    template: templatePug({bootstrap: Bootstrap}),
    controller: NavbarController,
};
