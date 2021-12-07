import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './app.types';



@Injectable({
  providedIn: 'root'
})

export class DataService {
   

  // // tasks: Task[] = [
  // //   new Task('Todo A', 'Project A', false, 'First project needs to ...', 'Penging'),
  // //   new Task('Todo F', 'Project F', true, 'Second project needs to ...', 'Completed'),
  // //   new Task('Todo G', 'Project G', false, 'Second project needs to ...', 'Pending'),
  // //    ]


  tasks: Task[];
  // = [
  //     {  "id":1,                                 
  //       "title": "Todo A",
  //       "project": "Project A",
  //       "done": false,
  //     },
  //     {  "id":2,
  //       "title": "Todo B",
  //       "project": "Project B",
  //       "done": true,
  //     },
  //     { "id":3,
  //       "title": "Todo C",
  //       "project": "Project C",
  //       "done": false
  //     }
  //   ];

    detailedTasks: Task[] | undefined;
    // = [
    //   {  "id":1,
    //     "title": "Todo A",
    //     "project": "Project A",
    //     "done": false,
    //     "details": "First project needs to ...",
    //   },
    //   {  "id":2,
    //     "title": "Todo B",
    //     "project": "Project B",
    //     "done": true,
    //     "details": "Second project needs to ...",
    //   },
    //   { "id":3,
    //     "title": "Todo C",
    //     "project": "Project C",
    //     "done": false,
    //     "details": "Third project needs to ...",
    //   }
    // ];

    onTaskLoad$: Subject<void> = new Subject<void>();
    onDetailedTaskLoad$: Subject<void> = new Subject<void>();

    constructor(){
        
    }

}