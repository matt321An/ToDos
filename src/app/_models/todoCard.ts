import { User } from "./user";
import { TodoItem } from "./todoItem";

export class TodoCard {
    id: number;
    user: User;
    userId: number;
    title: string;
    todoItems: TodoItem[];

    constructor(userId: number, title: string) {
        this.userId = userId;
        this.title = title;
    }
}