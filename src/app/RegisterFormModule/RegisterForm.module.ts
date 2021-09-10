import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './RegisterForm.component';


@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [RegisterFormComponent],
    declarations: [RegisterFormComponent],
})
export class RegisterFormModule { }
