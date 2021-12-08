import { CompiledStylesheet, CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { DetailedTasks, Task, Tasks } from './services/app.types';
import { TaskComponent } from './components/task/task.component';
import { NgForm } from '@angular/forms';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';
import { DataService } from './services/data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // tasks: Task[];
  // detailedTasks: Task[] | undefined;
  showValidationErrors: boolean = false;
  titlePage = 'Todo Project In Angular';
  // selectedTask: Task | undefined;
  task: Task | undefined;
  inputTitleValue!: string;
  inputProjectValue!: string;
 
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter()

  constructor(
    public _dataService: DataService, 
    private dialog: MatDialog,  
    public httpClient: HttpClient
    ) {
      this.getTasks();
      this.getDetailedTasks();
    }
    ngOnInit(): void {
      // this.tasks = this. getAllTasks();
      // this.detailedTasks =this.getAllDetailedTasks();
      // this.getTasks();
      // this.getDetailedTasks();
    }

    // getAllTasks() {
    //   return this.tasks; 
    // }
  
    // getAllDetailedTasks() {
    //   return this.detailedTasks;
    // }
  


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
 

  addTask(task: Task) {
    this._dataService.tasks?.push(task)
    }
    updateTask(index: number, updatedTask: Task ) {
    this._dataService.tasks[index] = updatedTask
    }
    
  onFormSubmit(form: NgForm) {
    if(!form.valid) {this.showValidationErrors = true }
    else{
    this.addTask(new Task(form.value.title, form.value.project))
    form.reset()
  }
  }


toggleCompleted(task:Task) {
  task.done = !task.done
}
  

editTask(task:Task){
  //We need 
  //-index of todo
  //-user needs to enter new informations
  
  const index = this._dataService.tasks.indexOf(task)
   

  let dialogRef = this.dialog.open(EditTaskDialogComponent, {
    height: '400px',
    width: '300px',
    data: task
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result)  {
     this.updateTask(index, result)
    }
  })

}
 deleteTask1(index: number): void {
    this._dataService.tasks?.splice(index, 1)
    }

deleteTask(task: Task){
  const index = this._dataService.tasks?.indexOf(task)
  this.deleteTask1(index)
}

cancel() {
  // window.location.reload();         // takto nie!
  this.inputTitleValue = ''; 
  this.inputProjectValue = ''; 
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



// onTaskClick(selectedTaskId: number) {
//   if (this.selectedTask?.id === selectedTaskId) return;
//   this.selectedTask = this.detailedTasks?.find(task => task.id === selectedTaskId);
//   console.log(this.selectedTask);
// }

}

