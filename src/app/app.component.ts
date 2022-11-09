import { Component, HostListener, OnInit } from "@angular/core";
import { FormulaModule } from './formula/formula.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SidebarModule } from './sidebar/sidebar.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@Component({
  selector: "app-root",
  imports: [
    FormulaModule,
    NzInputModule,
    SidebarModule,
    ToolbarModule
  ],
  template: `
    <div class="plots-app">
      <app-toolbar></app-toolbar>
      <sidebar-container>
        <sidebar [size]="sidebarWidth" (resize)="onSidebarResize($event)">
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
export class AppComponent implements OnInit {
  sidebarWidth = 0;
  sizeRatio = 1 - 0.618;
  
  ngOnInit(): void {
    this.sidebarWidth = window.innerWidth * this.sizeRatio;
  }
  @HostListener('window:resize')
  onWindowResize() {
    this.sidebarWidth = window.innerWidth * this.sizeRatio;
  }
  onSidebarResize(newSize: number) {
    this.sizeRatio = newSize / window.innerWidth;
  }
}
