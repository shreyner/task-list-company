import {IHttpService} from "angular";

/// TODO: execute_before и sum заменить на подходящие типы.
/// TODO: Добавить отдельное поле для валюты
export interface INewTaskResponse {
    id: string;
    name: string;
    city: string;
    execute_before: string;
    sum: string;
}

export class TasksService {
    private $http: IHttpService;

    constructor($http) {
        this.$http = $http;
    }

    public getNewTasks() {
        return this.$http.get<INewTaskResponse[]>("data/new-tasks.json");
    }
}

TasksService.$inject = ["$http"];
