import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout', //tên thẻ component
    template: `
    <div>
      Bài tập layout component
      <app-bt-header></app-bt-header>
      <div class="d-flex">
          <div style="width: 70%;">
            <app-bt-content></app-bt-content>
          </div>
          <div style="width: 30%;">
            <app-bt-sidebar></app-bt-sidebar>
          </div>

      </div>
      <app-bt-footer></app-bt-footer>
    </div>
  `,
})
export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
