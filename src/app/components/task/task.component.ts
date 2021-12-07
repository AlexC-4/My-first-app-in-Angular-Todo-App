import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
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


   private _id: string | undefined;

    constructor(private _activatedRoute: ActivatedRoute, private _dataService:DataService) {
          this._activatedRoute.params.subscribe(i => (this._id = i["id"]))
      this._dataService.onDetailedTaskLoad$.subscribe(() => {
          this.task = this._dataService.tasks?.find(task => task.id === +(this._id as any));
          console.log(this._id);
          console.log(this._dataService.detailedTasks); 
          console.log("Loaded");
        })
  }

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

