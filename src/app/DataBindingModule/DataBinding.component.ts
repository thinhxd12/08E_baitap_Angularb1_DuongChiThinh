import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <div class="container">
      <h2 class="">Databinding</h2>
      <h4 class="text-primary">Oneway binding</h4>
      <p class="text-danger">
        1. Interpolation (Binding dữ liệu từ models-> view thông qua thuộc tính
        với dấu cặp ngoặc nhọn)
      </p>
      <p>Tiêu đề: {{ title }}</p>
      <input value="{{ title }}" />
      <p class="text-danger">
        2. Property binding (binding dựa trên thuộc tính thẻ thông qua [])
        =>thường dùng cho thẻ input
      </p>
      <div [innerText]="title"></div>
      <input [value]="title" />
      <p class="text-danger">
        3. Event binding (Thay đổi dữ liệu trên giao diện thông qua xử lý thao
        tác từ người dùng)
      </p>
      <div class="form-group">
        <p>Tiêu đề</p>
        <input class="form-control w-25" #tagInput />
        <button
          class="btn btn-success mt-2"
          (click)="changeTitle(tagInput.value)"
        >
          Change title
        </button>
      </div>

      <h4 class="text-primary">Twoway binding</h4>
      <input class="form-control" [(ngModel)]="title" />

      <table class="table mt-4">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of arrProduct">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td><img [src]="product.img" width="50" alt="..." /></td>
            <td>{{ product.price }}</td>
            <td><input class="form-control" [(ngModel)]="product.quantity"/></td>
            <td>{{ product.price * product.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class DataBindingComponent implements OnInit {
  //MVVM
  //Dữ liệu muốn hiển thị lên giao diện thì phải là thuộc tính của component
  title: string = 'abc';

  arrProduct: Product[] = [
    {
      id: '1',
      name: 'IphoneX',
      price: 1000,
      quantity: 10,
      img: 'https://picsum.photos/id/12/200/200',
    },
    {
      id: '2',
      name: 'IphoneXS',
      price: 1500,
      quantity: 15,
      img: 'https://picsum.photos/id/13/200/200',
    },
    {
      id: '3',
      name: 'IphoneXS Max',
      price: 2000,
      quantity: 20,
      img: 'https://picsum.photos/id/14/200/200',
    },
  ];

  constructor() {}

  changeTitle = (newTitle: string) => {
    this.title = newTitle;
  };

  ngOnInit() {}
}

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}
