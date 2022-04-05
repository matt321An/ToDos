import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TodoCardService } from 'src/app/_services/todo-card.service';
import { TodoCard } from 'src/app/_models/todoCard';
import { errorMonitor } from 'events';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  /*todoCardList = [
    {
      id: 0,
      title: "School",
      important: true,
      toDoItem: [
        { id: 0, title: "WAD Homework", date: "Tu Mar 15 2022", important: true, check: false },
        { id: 1, title: "SE Homework", date: "We Mar 16 2022", important: true, check: false },
        { id: 2, title: "Project Homework", date: "Th Mar 17 2022", important: false, check: false },
        { id: 3, title: "CP Homework", date: "Su Mar 20 2022", important: true, check: false }
      ]
    },
    {
      id: 1,
      title: "Personal",
      important: false,
      toDoItem: [
        { id: 0, title: "Go to gym", date: "Su Mar 13 2022", important: false, check: false },
        { id: 1, title: "Pay mortage", date: "We Mar 30 2022", important: true, check: false },
      ]
    },
    {
      id: 2,
      title: "Groceries",
      important: true,
      toDoItem: [
        { id: 0, title: "Rice", date: "", important: true, check: false },
        { id: 1, title: "Pork", date: "", important: false, check: false },
        { id: 2, title: "Tomatoes", date: "", important: false, check: false },
        { id: 3, title: "Oranges", date: "", important: false, check: false },
        { id: 4, title: "Egs", date: "", important: true, check: false },
        { id: 5, title: "Sugar", date: "", important: true, check: false },
      ]
    }
  ];*/

  editedTitle: string;
  todoCardList: TodoCard[] = [];

  constructor(private todoCardService: TodoCardService) { }

  ngOnInit(): void {
    this.getTodoCards();
  }

  getTodoCards() {
    this.todoCardService.getTodoCards().subscribe(cards => {
      this.todoCardList = cards;
    }, error => {
      console.log(error);
    })
  }

  newTodoCard() {
    let card = new TodoCard(1, "");
    this.todoCardService.addTodoCard(card).subscribe(() => {
      console.log("Todo Card added");
      this.getTodoCards();
    }, error => {
      console.log(error);
    })
  }

  deleteTodoCard(id: number) {
    this.todoCardService.deleteTodoCard(id).subscribe(() => {
      console.log("Todo card deleted");
      this.getTodoCards();
    }, error => {
      console.log(error);
    })
  }

  updateTodoCardTitle(card: TodoCard) {
    if(this.editedTitle) {

      card.title = this.editedTitle;
      this.todoCardService.updateTodoCard(card).subscribe(() => {
        console.log("Todo card updated");
        this.getTodoCards();
        
      }, error => {
        console.log(error)
      })

    }
  }

  onTitleChange(value: string) {
    console.log("change" + value);
    this.editedTitle = value;
  }

  /*
  changeCheckAttribute(todoCardId: number, todoItemId: number) {
    this.todoCardList[todoCardId].toDoItem[todoItemId].check = 
      !this.todoCardList[todoCardId].toDoItem[todoItemId].check;
  }

  changeImportantAttribute(todoCardId: number, todoItemId: number) {
    this.todoCardList[todoCardId].toDoItem[todoItemId].important =
      !this.todoCardList[todoCardId].toDoItem[todoItemId].important;
  }

  deleteTodoItem(todoCardId: number, todoItemId: number) {
    delete this.todoCardList[todoCardId].toDoItem[todoItemId];
  }

  deleteTodoCard(todoCardId: number) {
    delete this.todoCardList[todoCardId];
  }

  saveEditTitle(id: number) {
    if(this.editedTitle) {
      // Remove everythign after <div> or &nbsp or <br>
      this.todoCardList[id].title = this.editedTitle;
    }
    console.log(this.todoCardList[id].title);
  }

  

  newTodoCard() {
    var index = this.todoCardList.length;
    const todoCard = {
      id: index,
      title: "Insert title",
      important: false,
      toDoItem: []
    };

    this.todoCardList.push(todoCard);
  }
  */



}
