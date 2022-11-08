import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-content',
  templateUrl: './sidebar-content.component.html',
  host: {
    'class': 'plots-sidebar-content'
  },
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
