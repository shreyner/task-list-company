import {IController} from "angular";
import {INewTaskResponse, TasksService} from "./tasks.service";

export class TasksController implements IController {
    private tasksService: TasksService;
    private newTasksData: INewTaskResponse[] = [];

    constructor(tasksService) {
        this.tasksService = tasksService;
    }

    public $onInit(): void {
        this.tasksService.getNewTasks().then((resp) => {
            this.newTasksData = resp.data;
        });
    }
}

TasksController.$inject = ["tasksService"];
