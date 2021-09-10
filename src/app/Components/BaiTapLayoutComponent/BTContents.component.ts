import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-content',
    template: `
    <div class="bt-content" style="height: 50px;">
        content
    </div>
    `,
    styles: [`
    .bt-content{
        background:yellow,
        
    }
    
    `]
})

export class BTContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}