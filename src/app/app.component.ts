import { CompiledStylesheet, CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { DetailedTasks, Task, Tasks } from './services/app.types';
import { TaskComponent } from './components/task/task.component';
// import { DataService } from './services/data.service';
import { NgForm } from '@angular/forms';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  tasks: Task[] = [];
  detailedTasks: Task[] | undefined;
  showValidationErrors: boolean = false;
  titlePage = 'Todo Project In Angular';
  selectedTask: Task | undefined;
  task: Task | undefined;
  inputTitleValue!: string;
  inputProjectValue!: string;
 

  @Output() cancelClicked: EventEmitter<void> = new EventEmitter()

  constructor(
    // private _dataService: DataService, 
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
      this.tasks = resultOfTasks.tasks;
      console.log(resultOfTasks);
    })}
    
    private getDetailedTasks() {
    this.httpClient.get<DetailedTasks>("assets/detailedTasks.json").subscribe(resultOfDetailedTasks => {
      this.detailedTasks = resultOfDetailedTasks.detailedTasks;
      console.log(resultOfDetailedTasks);
    })

  }
 
  addTask(task: Task) {
    this.tasks.push(task)
    }
    
    updateTask(index: number, updatedTask: Task ) {
     
    this.tasks[index] = updatedTask
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
  
  const index = this.tasks.indexOf(task)
   

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
    this.tasks.splice(index, 1)
    }

deleteTask(task: Task){
  const index = this.tasks.indexOf(task)
  this.deleteTask1(index)
}

cancel() {
  // window.location.reload();         // takto nie!
  this.inputTitleValue = ''; 
  this.inputProjectValue = ''; 
}


onTaskClick(selectedTaskId: number) {
  if (this.selectedTask?.id === selectedTaskId) return;
  this.selectedTask = this.detailedTasks?.find(task => task.id === selectedTaskId);
  console.log(this.selectedTask);
}

}


