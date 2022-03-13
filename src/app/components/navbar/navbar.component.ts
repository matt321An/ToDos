import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginForm:FormGroup;
  isCollapsed = true;
  showUserMenu = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl(null, Validators.required)
    });
  }


  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  } 

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
  
  onSubmit() {
    console.log(this.loginForm.value);
  }

}
