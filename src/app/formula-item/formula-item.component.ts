import { Component, Input, OnInit } from '@angular/core';
import { FormulaItem } from '../formula/formulaItem';

@Component({
  selector: 'formula-item',
  templateUrl: './formula-item.component.html',
  styleUrls: ['./formula-item.component.css']
})
export class FormulaItemComponent implements OnInit {

  @Input()
  item!: FormulaItem

  constructor() { }


  ngOnInit(): void {
    console.log(this.item);
  }
  updatePlotColor(color: string) {

  }
  delete() {

  }

}
