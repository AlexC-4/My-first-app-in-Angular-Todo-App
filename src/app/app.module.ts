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
import { DataService } from './services/data.service';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RoutingWrapperComponent } from './components/routing-wrapper/routing-wrapper.component';
import { TaskListComponent } from './components/task-list/task-list.component';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EditTaskDialogComponent,
    RoutingWrapperComponent,
    TaskListComponent
  
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
  DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
