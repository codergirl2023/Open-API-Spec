"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
class TodosService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked title",
            description: "mocked description",
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("mock db call");
        return {
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
}
exports.TodosService = TodosService;
