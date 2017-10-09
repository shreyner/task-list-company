import * as angular from "angular";
import Bootstrap from "bootstrap/scss/bootstrap.scss";
import styles from "./app.scss";

const layout = `
<navbar-main></navbar-main>
<div class="${Bootstrap.container}">
  <h1 class="${styles.hello}">Hello app</h1>
  <list-heroes />
</div>
`;

export const AppComponent: angular.IComponentOptions = {
    template: layout,
};
