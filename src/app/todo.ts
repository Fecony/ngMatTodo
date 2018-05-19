export class Todo {
  id: number;
  title: string = '';
  isDone: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}