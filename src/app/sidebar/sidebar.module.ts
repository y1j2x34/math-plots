import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from '../sidebar-container/sidebar-container.component';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [
    SidebarContainerComponent,
    SidebarContentComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarContainerComponent,
    SidebarContentComponent,
    SidebarComponent
  ]
})
export class SidebarModule { }
