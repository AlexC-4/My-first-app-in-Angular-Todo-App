
import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';
import { DetailedTasks, Task, Tasks } from 'src/app/services/app.types';
import { DataService } from 'src/app/services/data.service';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {



  showValidationErrors: boolean = false;
  titlePage = 'Todo Project In Angular';
  selectedTask: Task | undefined;
  task: Task | undefined;
  inputTitleValue!: string;
  inputProjectValue!: string;
 
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter()

  constructor(
    public _dataService: DataService, 
    private dialog: MatDialog,  
    public httpClient: HttpClient
    ) {

    }

    ngOnInit(): void {
     
    }

  addTask(task: Task) {
    this._dataService.tasks.push(task)
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



deleteTask(task: Task){
  const index = this._dataService.tasks.indexOf(task)
  this._dataService.deleteTask(index)
}

cancel() {
  // window.location.reload();         // takto nie!
  this.inputTitleValue = ''; 
  this.inputProjectValue = ''; 
}


}
