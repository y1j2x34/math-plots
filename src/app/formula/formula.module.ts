import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormulaItemComponent } from '../formula-item/formula-item.component';
import { FormulaListComponent } from '../formula-list/formula-list.component';
import 'mathlive';
import { DeleteOutline, PlusOutline } from '@ant-design/icons-angular/icons';


@NgModule({
  declarations: [
    FormulaItemComponent,
    FormulaListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule.forChild([PlusOutline, DeleteOutline]),
    NzModalModule
  ],
  exports: [
    FormulaItemComponent,
    FormulaListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormulaModule { }
