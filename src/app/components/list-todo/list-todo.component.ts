import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todoCardList = [
    {
      id:0,
      title: "School",
      important: true,
      toDoItem: [
        {id:0, title: "WAD Homework", date: "15 Mar 2022", important: true, check:false},
        {id:1, title: "SE Homework", date: "16 Mar 2022", important: true, check:false}, 
        {id:2, title: "Project Homework", date: "18 Mar 2022", important: false, check:false}, 
        {id:3, title: "CP Homework", date: "19 Mar 2022", important: true, check:false}
      ]
    },
    {
      id:1,
      title: "Personal",
      important: false,
      toDoItem: [
        {id:0, title: "Go to gym", date: "13 Mar 2022", important: false, check:false},
        {id:1, title: "Pay mortage", date: "30 Mar ", important: true, check:false}, 
      ]
    },
    {
      id:2,
      title: "Groceries",
      important: true,
      toDoItem: [
        {id:0, title: "Rice", date: "", important: true, check:false},
        {id:1, title: "Pork", date: "", important: false, check:false}, 
        {id:2, title: "Tomatoes", date: "", important: false, check:false}, 
        {id:3, title: "Oranges", date: "", important: false, check:false}, 
        {id:4, title: "Egs", date: "", important: true, check:false}, 
        {id:5, title: "Sugar", date: "", important: true, check:false}, 
      ]      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  changeCheckAttribute(todoCardId: number, todoItemId: number) {
    this.todoCardList[todoCardId].toDoItem[todoItemId].check = 
      !this.todoCardList[todoCardId].toDoItem[todoItemId].check;
  }

  changeImportantAttribute(todoCardId: number, todoItemId: number) {
    this.todoCardList[todoCardId].toDoItem[todoItemId].important =
      !this.todoCardList[todoCardId].toDoItem[todoItemId].important;
  }

}
