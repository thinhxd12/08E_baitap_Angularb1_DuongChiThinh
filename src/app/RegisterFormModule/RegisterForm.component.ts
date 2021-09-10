import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  template: `
    <div class="container w-50">
      <h3>Register Form</h3>
      <div class="form-group">
        <p class="font-weight-bold">Email:</p>
        <input class="form-control" [(ngModel)]="email" />
      </div>
      <div class="form-group">
        <p class="font-weight-bold">Full name:</p>
        <input class="form-control" #fullNameInput />
      </div>
      <div class="form-group">
        <button
          class="btn btn-success mb-3"
          (click)="submitFullName(fullNameInput.value)"
        >
          Submit
        </button>
        <p class="font-weight-bold">
          Email: <span class="font-weight-normal">{{ email }}</span>
        </p>
        <p class="font-weight-bold">
          FullName: <span class="font-weight-normal">{{ fullName }}</span>
        </p>
      </div>
    </div>
  `,
})
export class RegisterFormComponent implements OnInit {
  email: string = 'abc@gmail.com';
  fullName: string = '';
  constructor() {}
  submitFullName = (input: string) => {
    this.fullName = input;
  };
  ngOnInit() {}
}
