import * as angular from "angular";
import Bootstrap from "bootstrap/scss/bootstrap.scss";
import templatePug from "./app.pug";

export const AppComponent: angular.IComponentOptions = {
    template: templatePug({bootstrap: Bootstrap}),
};
