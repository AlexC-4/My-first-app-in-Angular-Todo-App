import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../services/app.types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input() task: Task | undefined;
  @Input() done: boolean | undefined;
  @Output() statusClicked: EventEmitter <void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();
  @Output() onTaskClick: EventEmitter<number> = new EventEmitter<number>();

   onTaskSelected():void {
     this.onTaskClick.emit(this.task?.id);
   }

  onStatusClicked() {
    this.statusClicked.emit()
  }

  onEditClicked() {
    this.editClicked.emit()
     }

     
     onDeleteClicked() {
      this.deleteClicked.emit()
    }
   
   
  }

