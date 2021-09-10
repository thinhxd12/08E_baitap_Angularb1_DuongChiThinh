import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
    <div class="container">
      <h3>Structural (directive angular cung cấp)</h3>
      <nav class="nav justify-content-center bg-dark text-white">
        <a
          *ngIf="!isLogin"
          class="nav-link text-white"
          href="#"
          (click)="login()"
          >Login</a
        >
        <a *ngIf="isLogin" class="nav-link text-white" href="#"
          >Hello! {{ userName }}</a
        >
      </nav>

      <nav class="nav justify-content-center bg-dark text-white">
        <a
          *ngIf="!isLogin; else tempLogin"
          class="nav-link text-white"
          href="#"
          (click)="login()"
          >Login</a
        >
      </nav>

      <ng-template #tempLogin>
        <a *ngIf="isLogin" class="nav-link text-white" href="#"
          >Hello! {{ userName }}</a
        >
      </ng-template>

      <hr />
      <div class="form-group">
        <p>Nhập số</p>
        <input class="form-control w-25" [(ngModel)]="number" />
      </div>
      <div class="alert alert-success">
        <p *ngIf="number % 2 === 0">Số chẵn</p>
        <p *ngIf="number % 2 !== 0">Số lẻ</p>
      </div>

      <h3>*ngSwithcCase</h3>
      <select [(ngModel)]="color" class="form-control w-25">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'" style="color: red;">red</div>
        <div *ngSwitchCase="'green'" style="color: green;">green</div>
        <div *ngSwitchCase="'blue'" style="color: blue;">blue</div>
        <div *ngSwitchCase="'yellow'" style="color: yellow;">yellow</div>
      </div>
      <hr />
      <h3>*ngFor</h3>
      <div class="row">
        <div class="col-4" *ngFor="let user of arrUser; let index = index">
          <div class="card">
            <img [src]="user.avatar" alt="..." />
            <div class="card-body bg-dark text-white">
              <p>ID: {{ index + 1 }}</p>
              <p>User Name: {{ user.userName }}</p>
              <p>Password: {{ user.password }}</p>
              <p>Email: {{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DirectiveComponent implements OnInit {
  userName: string = 'abc';
  isLogin: boolean = false;
  number: number = 5;
  color: string = 'red';

  arrUser: User[] = [
    {
      userName: 'user1',
      password: '123',
      email: 'user1@gmail.com',
      avatar: 'https:/i.pravatar.cc?u=1',
    },
    {
      userName: 'user2',
      password: '123',
      email: 'user2@gmail.com',
      avatar: 'https:/i.pravatar.cc?u=2',
    },
    {
      userName: 'user3',
      password: '123',
      email: 'user3@gmail.com',
      avatar: 'https:/i.pravatar.cc?u=3',
    },
  ];

  constructor() {}

  login = () => {
    this.isLogin = true;
  };

  ngOnInit() {}
}

interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}
