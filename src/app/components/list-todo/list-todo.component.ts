import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todoCardList = [
    {
      title: "School",
      important: true,
      toDoItem: [
        {title: "WAD Homework", date: "15 Mar 2022"},
        {title: "SE Homework", date: "16 Mar 2022"}, 
        {title: "Project Homework", date: "18 Mar 2022"}, 
        {title: "CP Homework", date: "19 Mar 2022"}
      ]
    },
    {
      title: "Personal",
      important: false,
      toDoItem: [
        {title: "Go to gym", date: "13 Mar 2022", important: false},
        {title: "Pay mortage", date: "30 Mar ", important: true}, 
      ]
    },
    {
      title: "Groceries",
      important: true,
      toDoItem: [
        {title: "Rice", date: ""},
        {title: "Pork", date: ""}, 
        {title: "Tomatoes", date: ""}, 
        {title: "Oranges", date: ""}, 
        {title: "Egs", date: ""}, 
        {title: "Sugar", date: ""}, 
      ]      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
