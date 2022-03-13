import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
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
  todoForm: FormGroup;
  todoCard: any;
  todoItemId: number;
  date: any;
  isImportant = false;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.todoItemId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loadTodoCard();
    this.createTodoForm();
  }

  createTodoForm() {
    this.todoForm = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      date: new FormControl(null),
      important: new FormControl(null)
    });
  }

  onSubmit() {
    if(this.date) {
      this.todoForm.get('date').setValue(this.date);
    }
    this.todoForm.get('important').setValue(this.isImportant);
    var index = this.todoCard.toDoItem.length;
    const newTodoItem = {
      id: index,
      title: this.todoForm.get('title').value,
      date: this.todoForm.get('date').value,
      important: this.todoForm.get('important').value,
      check: false
    }

    this.todoCard.toDoItem.push(newTodoItem);

    console.log(this.todoForm.value);
    this.todoForm.reset();
    this.date = null;
    this.isImportant = false;
  }

  onDatePicked(value: Date) {
    this.date = value.toDateString();
    console.log(this.date);
  }

  toggleIsImportantAttributeTodoForm() {
    this.isImportant = !this.isImportant;
  }

  loadTodoCard() {
    this.todoCard = this.todoCardList[this.todoItemId];
    console.log(this.todoCard);
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
    this.loadTodoCard();
  }

}
