import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-container',
  templateUrl: './sidebar-container.component.html',
  host: {
    '[class]': `['plots-sidebar-container', direction].join(' ')`
  },
  styleUrls: ['./sidebar-container.component.css']
})
export class SidebarContainerComponent implements OnInit {

  @Input()
  public direction: 'horizontal' | 'vertical' = 'horizontal';

  @Input()
  @HostBinding('class.reverse')
  public reverse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
