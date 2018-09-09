import * as angular from "angular";
import {GlobalTimer} from "./globalTimer";

export const services = angular.module("app.services", [
])
    .service("globalTimer", GlobalTimer)
    .name;
