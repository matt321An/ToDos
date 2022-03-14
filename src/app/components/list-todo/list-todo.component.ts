import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todoCardList = [
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
  ];
  editedTitle: string;

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

  onTitleChange(value: string) {
    
    console.log("change" + value);
    this.editedTitle = value;
  }


}
