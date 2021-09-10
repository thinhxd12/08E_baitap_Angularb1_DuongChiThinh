import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
    <div class="bt-footer" style="height: 50px;">
        footer
    </div>
    `,
    styles: [`
    .bt-footer{
        background:blue,
    }
    
    `]
})

export class BTFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}