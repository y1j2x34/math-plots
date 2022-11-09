import { Component, EventEmitter, Host, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { SidebarContainerComponent } from '../sidebar-container/sidebar-container.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  host: {
    '[class]': `'plots-sidebar ' + this.parent.direction`
  },
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  public maxSize = 1024;
  @Input()
  public minSize = 200;
  @Input()
  public size = 600;

  private isDragging = false;
  private startSize = 0;
  private startPoint?: {
    x: number;
    y: number;
  };

  @Output()
  private resize = new EventEmitter<number>();

  @HostBinding('style.min-width')
  get hostMinWidth () {
    switch(this.parent.direction) {
      case 'vertical':
        return null;
      case 'horizontal':
        return this.minSize + 'px';
    }
  };

  @HostBinding('style.min-height')
  get hostMinHeight() {
    switch(this.parent.direction) {
      case 'vertical':
        return this.minSize + 'px';
      case 'horizontal':
        return null;
    }
  };

  @HostBinding('style.max-width')
  get hostMaxWidth () {
    switch(this.parent.direction) {
      case 'vertical':
        return null;
      case 'horizontal':
        return this.maxSize + 'px';
    }
  };

  @HostBinding('style.max-height')
  get hostMaxHeight() {
    switch(this.parent.direction) {
      case 'vertical':
        return this.maxSize + 'px';
      case 'horizontal':
        return null;
    }
  };

  @HostBinding('style.width')
  get hostWidth () {
    switch (this.parent.direction) {
      case 'horizontal':
        return this.size + 'px';
      case 'vertical':
        return null;
    }
  };

  @HostBinding('style.height')
  get hostHeight () {
    switch (this.parent.direction) {
      case 'horizontal':
        return null;
      case 'vertical':
        return this.size + 'px';
    }
  };

  constructor( @Host() private parent: SidebarContainerComponent) { }

  ngOnInit(): void {
  }

  onMousedownOnToggler(event: MouseEvent) {
    this.isDragging = true;
    this.startPoint = {
      x: event.clientX,
      y: event.clientY
    }
    this.startSize = this.size;
  }

  @HostListener('document:mousemove', ['$event'])
  onDragging(event: MouseEvent) {
    if(!this.isDragging) {
      return;
    }
    let delta: number = 0;
    switch(this.parent.direction) {
      case 'horizontal':
        delta = event.clientX - this.startPoint!.x;
        break;
      case 'vertical':
        delta = event.clientY - this.startPoint!.y;
        break;
    }

    this.size = Math.min(Math.max(this.minSize, this.startSize + delta), this.maxSize);
  }
  @HostListener('document:mouseup', ['$event'])
  onDragEnd() {
    this.isDragging = false;
    this.resize.emit(this.size);
  }
}
