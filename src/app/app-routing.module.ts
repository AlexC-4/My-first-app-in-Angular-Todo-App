import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { RoutingWrapperComponent } from './components/routing-wrapper/routing-wrapper.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';


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
        component:TaskListComponent
      },
      {
        path: ":id",
        component:TaskComponent
      },
      // {
      //   path: "pending-tasks",
      //   redirectTo: "",
      //   pathMatch: "full"
      // },
      // {
      //   path: "pending-tasks",
      //   redirectTo: "",
      //   pathMatch: "full"
      // },
   
      {
        path: "edittask",
        component: EditTaskDialogComponent
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