import {IHttpService} from "angular";
import {GlobalTimer} from "../../service/globalTimer";

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
    // private unSubscribe;

    constructor($http: IHttpService, globalTimer: GlobalTimer) {
        this.$http = $http;
        this.unSubscribe = globalTimer.subscribe(this.changeTimer);

        console.log("TasksService constructor");
    }



    private changeTimer(count: number){
        console.log(count);
    }

    public getNewTasks() {
        return this.$http.get<INewTaskResponse[]>("data/new-tasks.json");
    }
}

TasksService.$inject = ["$http", "globalTimer"];
