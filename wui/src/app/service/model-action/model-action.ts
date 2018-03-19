import {Task} from "../model-task/model-task";

export class Action {
  id: string;
  title: string;
  description: string;
  due_date: string;
  owner_id: string;
  task_list: Task[];


  createdAt: number;
  updatedAt: number;
}
