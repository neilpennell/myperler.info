
export class Attendee {
  id: string;
  name: string;
  email: string;

  createdAt: number;
  updatedAt: number;

  constructor(data:any){
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;

    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

