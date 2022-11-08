import { Component } from "@angular/core";
import { FormulaModule } from './formula/formula.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SidebarModule } from './sidebar/sidebar.module';

@Component({
  selector: "app-root",
  imports: [
    FormulaModule,
    NzInputModule,
    SidebarModule
  ],
  template: `
    <div class="plots-app">
      <sidebar-container direction="horizontal">
        <sidebar [maxSize]="300">
          <formula-list></formula-list>
        </sidebar>
        <sidebar-content>
        </sidebar-content>
      </sidebar-container>
    </div>
  `,
  styles: [
    `
    .plots-app {
      height: 100vh;
      overflow: hidden;
      width: 100vw;
      display: block;
    }
    `,
  ],
  standalone: true
})
export class AppComponent {
  
}
