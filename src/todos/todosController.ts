import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { Todo } from "./todo";
  import { TodosService, TodoCreationParams } from "./todosService";
  
  @Route("todos")
  export class UsersController extends Controller {
    @Get("{todoId}")
    public async getTodo(
      @Path() todoId: string
    ): Promise<Todo> {
      return new TodosService().get(todoId);
    }
  
    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createTodo(
      @Body() requestBody: TodoCreationParams
    ): Promise<void> {
      this.setStatus(201); // set return status 201
      new TodosService().create(requestBody);
      return;
    }
  }