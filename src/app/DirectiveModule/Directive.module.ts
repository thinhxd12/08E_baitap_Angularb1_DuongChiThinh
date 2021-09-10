import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Directive.component';


@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent],
})
export class DirectiveModule { }
