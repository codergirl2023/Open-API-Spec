// src/users/usersService.ts
import { todo } from "node:test";
import { Todo } from "./todo";

// A post request should not contain an id.
export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodosService {
  public get(todoId: string): Todo {
    return {
      id:todoId,
      title: "mocked title",
      description: "mocked description",
      done:false
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    console.log("mock db call");
    return {
        id: "1",
        title: "mocked todo",
        description: "mocked todo",
        done: false
    }
   }
}