import { CompiledStylesheet, CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { Task } from './service/app.types';
import { TaskComponent } from './components/task/task.component';
import { DataService } from './service/data.service';
import { NgForm } from '@angular/forms';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[]
  showValidationErrors: boolean
  title = 'TodoProjectInAngular';
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter()

  constructor(private dataService: DataService, private dialog: MatDialog) {}
 
  ngOnInit(): void {
    this.tasks = this.dataService. getAllTasks()
  }

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

exit() {
  window.location.reload();
}

}

