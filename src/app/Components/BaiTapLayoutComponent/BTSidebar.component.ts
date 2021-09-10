import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-sidebar',
    template: `
    <div class="bt-sidebar" style="height: 50px;">
        sidebar
    </div>
    `,
    styles: [`
    .bt-sidebar{
        background:green,
    }
    
    `]
})

export class BTSidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}