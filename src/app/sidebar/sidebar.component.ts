import { Component, ElementRef, Host, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SidebarContainerComponent } from '../sidebar-container/sidebar-container.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  host: {
    '[class]': `'plots-sidebar ' + this.parent.direction`
  },
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input()
  public maxSize = 300;
  @Input()
  public size = 300;

  constructor(private hostElement: ElementRef<HTMLElement>, @Host() private parent: SidebarContainerComponent) { }
  ngOnChanges(changes: SimpleChanges): void {
    if('maxSize' in changes) {
      this.updateMaxSize();
    }
    if('size' in changes) {
      this.updateSize();
    }
  }
  private updateMaxSize() {
    switch(this.parent.direction) {
      case 'vertical':
        this.hostElement.nativeElement.style.cssText += `
          max-width: auto;
          max-height: ${this.maxSize}px;
        `;
        break;
      case 'horizontal':
        this.hostElement.nativeElement.style.cssText += `
          max-height: auto;
          max-width: ${this.maxSize}px;
        `;
        break;
    }
  }
  private updateSize() {
    switch(this.parent.direction) {
      case 'vertical':
        this.hostElement.nativeElement.style.cssText += `
          height: ${this.size}px;
        `;
        break;
      case 'horizontal':
        this.hostElement.nativeElement.style.cssText += `
          width: ${this.size}px;
        `;
        break;
    }
  }

  ngOnInit(): void {
    this.updateMaxSize();
    this.updateSize();
  }

}
