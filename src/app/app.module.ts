import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskComponent } from './components/task/task.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatIconModule } from '@angular/material/icon';
// import { DataService } from './services/data.service';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TasksWrapperComponent } from './components/tasks-wrapper/tasks-wrapper.component';
import { RoutingWrapperComponent } from './components/routing-wrapper/routing-wrapper.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EditTaskDialogComponent,
    TasksWrapperComponent,
    RoutingWrapperComponent,
    CompletedTasksComponent,
    PendingTasksComponent,
    AllTasksComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PickerModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
  // DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
