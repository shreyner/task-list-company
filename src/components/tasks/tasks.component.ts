import * as angular from "angular";
import {TasksController} from "./tasks.controller";
import Bootstrap from "bootstrap/scss/bootstrap.scss";

/// TODO: таблицу вынести в отдельный компонент
const layout = `
<h1>Задания</h1>
<taskTabs />
<table class="${Bootstrap.table}">
  <thead>
    <tr>
      <th>ID</th>
      <th>Город</th>
      <th>Название</th>
      <th>Выполнить До</th>
      <th>Сумма</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="task in $ctrl.newTasksData">
      <th scope="row">{{task.id}}</th>
      <td>{{task.city}}</td>
      <td>{{task.name}}</td>
      <td>{{task.execute_before}}</td>
      <td>{{task.sum}}</td>
    </tr>
  </tbody>
</table>
`;

export const tasksComponent: angular.IComponentOptions = {
    template: layout,
    controller: TasksController,
    controllerAs: "$ctrl",
};
