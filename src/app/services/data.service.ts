import { Injectable } from '@angular/core';
import { Task } from './app.types';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // tasks: Task[] = [
  //   new Task('Todo A', 'Project A', false, 'First project needs to ...', 'Penging'),
  //   new Task('Todo F', 'Project F', true, 'Second project needs to ...', 'Completed'),
  //   new Task('Todo G', 'Project G', false, 'Second project needs to ...', 'Pending'),
  //    ]

     // tasks: Task[] = [
  //   new Task('Todo A', 'Project A', false, 'First project needs to ...', 'Penging'),
  //   new Task('Todo F', 'Project F', true, 'Second project needs to ...', 'Completed'),
  //   new Task('Todo G', 'Project G', false, 'Second project needs to ...', 'Pending'),
  //    ]
  tasks: Task[] = [
      {  "id":1,                                 
        "title": "Todo A",
        "project": "Project A",
        "done": false,
      },
      {  "id":2,
        "title": "Todo B",
        "project": "Project B",
        "done": true,
      },
      { "id":3,
        "title": "Todo C",
        "project": "Project C",
        "done": false
      }
    ];

    detailedTasks: Task[] 
    = [
      {  "id":1,
        "title": "Todo A",
        "project": "Project A",
        "done": false,
        "details": "First project needs to ...",
      },
      {  "id":2,
        "title": "Todo B",
        "project": "Project B",
        "done": true,
        "details": "Second project needs to ...",
      },
      { "id":3,
        "title": "Todo C",
        "project": "Project C",
        "done": false,
        "details": "Third project needs to ...",
      }
    ];



    // public constructor(
    //       public title: string,
    //       public project: string,
    //       // public done: boolean = false,
    //       // public details?: string,
    //       // public id?: number,
    //       ) {}



  getAllTasks() {
    return this.tasks; 
  }

  getAllDetailedTasks() {
    return this.detailedTasks;
  }

  
  addTask(task: Task) {
  this.tasks.push(task)
  }
  
  updateTask(index: number, updatedTask: Task ) {
  this.tasks[index] = updatedTask
  }
  
  deleteTask(index: number) {
  this.tasks.splice(index, 1)
  }

 

}
