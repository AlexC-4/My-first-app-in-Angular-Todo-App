export interface Tasks {
  tasks: Task[];
}

export interface DetailedTasks {
  detailedTasks: Task[];
}

export class Task {
    public constructor(
    public title: string,
    public project: string,
    public done: boolean = false,
    public details?: string,
    public id?: number,
    ) {}
  }

// export interface Task {
//   id: number;
//   title: string;
//   project: string;
//   done: boolean;
//   details?:string;
// }

