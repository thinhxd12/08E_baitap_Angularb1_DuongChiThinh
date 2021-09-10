import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContentComponent } from './BTContents.component';
import { BTFooterComponent } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSidebarComponent } from './BTSidebar.component';


@NgModule({
    imports: [CommonModule], //Nơi import các module khác cho ứng dụng (vd:antdesign ....)
    exports: [BaiTapLayoutComponent], //Kết quả cần xuất ra (component,module) của module này(để module khác import vào)
    declarations: [
        BaiTapLayoutComponent,
        BTHeaderComponent,
        BTFooterComponent,
        BTContentComponent,
        BTSidebarComponent
    ], //Nơi chứa các component thuộc module này
    providers: [],
})
export class BaiTapLayoutModule { }
