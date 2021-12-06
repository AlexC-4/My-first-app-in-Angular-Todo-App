import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { RoutingWrapperComponent } from './components/routing-wrapper/routing-wrapper.component';
import { TasksWrapperComponent } from './components/tasks-wrapper/tasks-wrapper.component';

"localhost:4200/completedtasks"
"localhost:4200/pendingtasks"
"localhost:4200/tasks/details/1"
"localhost:4200/tasks/edit/1"

const routes: Routes = [
  {
    path: "",
    component: RoutingWrapperComponent,
    children: [
      {
        path: "",
        redirectTo: "task-list",
        pathMatch: "full"
      },
      {
        path: "task-list",
        component: AppComponent,
      },
      {
        path: "edittask",
        component: EditTaskDialogComponent
      },
  {
    path: "completed-tasks",
    component: CompletedTasksComponent
},
{
  path: "pending-tasks",
  component: PendingTasksComponent
}
      ]
    }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
