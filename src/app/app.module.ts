import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';
import { RegisterFormModule } from './RegisterFormModule/RegisterForm.module';

@NgModule({
  declarations: [
    AppComponent,   //Nơi chứa component (Mỗi component sinh ra phải có module chứa nó)
    DemoComponent,
  
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    RegisterFormModule
    
  ], //Nơi import các module khác của ứng dụng
  providers: [],  //Nơi khai báo các service
  bootstrap: [AppComponent]   // NƠi khai báo các chạy trên index Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
