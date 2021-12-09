import { CompiledStylesheet, CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { DetailedTasks, Task, Tasks } from './services/app.types';
import { TaskComponent } from './components/task/task.component';
import { NgForm } from '@angular/forms';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';
import { DataService } from './services/data.service';
import { filter, Subject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    public _dataService: DataService, 
    private dialog: MatDialog,  
    public httpClient: HttpClient
    ) {
      this.getTasks();
      this.getDetailedTasks();

    }

           
 private getTasks(){
  this.httpClient.get<Tasks>("assets/tasks.json").subscribe((resultOfTasks:Tasks) => {
    this._dataService.tasks = resultOfTasks.tasks;
    console.log("Task finished loading")
    this._dataService.onTaskLoad$.next();
    console.log(this._dataService.tasks);
  })}
  
  private getDetailedTasks() {
  this.httpClient.get<DetailedTasks>("assets/detailedTasks.json").subscribe(resultOfDetailedTasks => {
    this._dataService.detailedTasks = resultOfDetailedTasks.detailedTasks;
    this._dataService.onDetailedTaskLoad$.next();
    console.log(this._dataService.detailedTasks);
  })

}


onCompletedTasks(){
  this._dataService.tasks = this._dataService.getCompletedTasks();
}

onPendingTasks(){ 
  this._dataService.tasks = this._dataService.getPendingTasks();
}

onAllTasks(){
  this.getTasks();
}

}