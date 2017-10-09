import {IController} from "angular";
// import styles from "./navbar.scss";
import Bootstrap from "bootstrap/scss/bootstrap.scss";
import classNames from "classnames/bind";

// navbar navbar-expand-lg navbar-light bg-light

const style = classNames.bind(Bootstrap);

export class NavbarController implements IController {
    private $element: JQuery;

    constructor($element) {
        this.$element = $element;
    }

    public $onInit(): void {
        this.$element.addClass(
            style(
                "navbar",
                "navbar-expand-lg",
                "navbar-dark",
                "bg-dark",
            ),
        );
    }
}

NavbarController.$inject = ["$element"];
