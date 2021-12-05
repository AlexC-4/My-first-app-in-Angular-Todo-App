
import { CompiledStylesheet, CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { DetailedTasks, Task, Tasks } from './services/app.types';
import { TaskComponent } from './components/task/task.component';
import { DataService } from './services/data.service';
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
  tasks: Task[] = [];
  detailedTasks: Task[] | undefined;
  showValidationErrors: boolean = false;
  titlePage = 'Todo Project In Angular';
  // isAllTodosListVisible = true;
  selectedTask: Task | undefined;
  task: Task | undefined;
  inputTitleValue!: string;
  inputProjectValue!: string;
 

  // isCompletedListVisible => (if(task.done==true) return true;)
  // isPengingListVisible = false;
  
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter()

  constructor(
    private dataService: DataService, 
    private dialog: MatDialog,  
    // public httpClient: HttpClient
    ) {
   
    // this.httpClient.get<Tasks>("assets/tasks.json").subscribe((resultOfTasks:Tasks) => {
    //   this.tasks = resultOfTasks.tasks;
    //   // console.log(resultOfTasks);
    // })

    // this.httpClient.get<DetailedTasks>("assets/detailedTasks.json").subscribe(resultOfDetailedTasks => {
    //   this.detailedTasks = resultOfDetailedTasks.detailedTasks;
    //   // console.log(resultOfDetailedTasks);
    // })

  }
 
  ngOnInit(): void {
    this.tasks = this.dataService. getAllTasks();
    this.detailedTasks = this.dataService. getAllDetailedTasks();
  }

  onAllTodosClick():void {
    this.tasks = this.dataService. getAllTasks();
  }

  // onCompletedTodosClick() {
  //   this.isAllTaskListVisible = false;
  //   this.isCompletedListVisible = true;
  //   this.isPendingListVisible = false;
  // }


  // onCompletedTodosClick() {
  //   if(this.task.done == true)
  //   return this.tasks;
  //   else return this.tasks==null;
  // }

  // public constructor(
  //   public id: number,
  //   public title: string,
  //   public project: string,
  //   public done: boolean = false,
  //   public details?: string,
  //   ) {}

 
  onFormSubmit(form: NgForm) {
    if(!form.valid) {this.showValidationErrors = true }
    else{
    this.dataService.addTask(new Task(form.value.title, form.value.project))
    form.reset()
  }
  }


toggleCompleted(task:Task) {
  task.done = !task.done
}
  
// onCancelClicked() {
//   this.cancelClicked._document.defaultView.location.reload();
// }


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
    if (result) {
      this.dataService.updateTask(index, result)
    }
  })

}

deleteTask(task: Task){
  const index = this.tasks.indexOf(task)
  this.dataService.deleteTask(index)
}

cancel() {
  // window.location.reload();

  this.inputTitleValue = ''; 
  this.inputProjectValue = ''; 
 
//   form.reset();
//  this.showValidationErrors = false;
}


onTaskClick(selectedTaskId: number) {
  if (this.selectedTask?.id === selectedTaskId) return;
  this.selectedTask = this.detailedTasks?.find(task => task.id === selectedTaskId);
  console.log(this.selectedTask);
}

}

