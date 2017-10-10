import * as angular from "angular";
import Bootstrap from "bootstrap/scss/bootstrap.scss";

const layout = `
<navbar-main></navbar-main>
<div class="${Bootstrap.container}">
  <tasks />
</div>
`;

export const AppComponent: angular.IComponentOptions = {
    template: layout,
};
