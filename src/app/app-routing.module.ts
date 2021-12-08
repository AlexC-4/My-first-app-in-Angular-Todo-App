import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';

import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { RoutingWrapperComponent } from './components/routing-wrapper/routing-wrapper.component';
import { TaskComponent } from './components/task/task.component';
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
      // {
      //   path: "",
      //   redirectTo: "task-list",
      //   pathMatch: "full"
      // },
      {path: ":id",
          component: TaskComponent
        },
      {
        path: "task-list",
        component: AppComponent,
        children:[
          {path: ":id",
          component: TaskComponent
        }
        ]
      },
      {
        path: "edittask",
        component: EditTaskDialogComponent
      },
//   {
//     path: "completed-tasks",
//     component: CompletedTasksComponent
// },
{
  path: "pending-tasks",
  component: AppComponent
},
{
  path: "pending-tasks",
  component: AppComponent
},
      ]
    },
    {
      path: "**",
      redirectTo: "",      //localhost:4200
      pathMatch: "full"
      // component: NotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }