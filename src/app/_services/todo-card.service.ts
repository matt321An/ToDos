import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { TodoCard } from "../_models/todoCard";

@Injectable({
    providedIn: 'root'
})

export class TodoCardService {

    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getTodoCards() {
        return this.http.get<TodoCard[]>(this.baseUrl + 'todocard');
    }

    addTodoCard(card: TodoCard) {
        return this.http.post(this.baseUrl + 'todocard', card);
    }

    deleteTodoCard(id: number) {
        console.log(id);
        return this.http.delete(this.baseUrl + 'todocard/delete/' + id);
    }

    updateTodoCard(card: TodoCard) {
        return this.http.put(this.baseUrl + 'todocard/update', card);
    }


}
