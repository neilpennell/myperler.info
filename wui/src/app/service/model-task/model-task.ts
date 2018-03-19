
export class Status {
  title: string;
  description: string;
  owner_id: string;

  createdAt: number;
  updatedAt: number;
}

export class Task {
  id: string;
  title: string;
  description: string;
  due_date: string;
  owner_id: string;
  status_updates: Status[];

  createdAt: number;
  updatedAt: number;
}
