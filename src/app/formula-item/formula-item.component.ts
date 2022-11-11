import { Component, Input, OnInit } from '@angular/core';
import { FormulaListService } from '../formula-list.service';
import { FormulaItem } from '../formula/formulaItem';

@Component({
  selector: 'formula-item',
  templateUrl: './formula-item.component.html',
  styleUrls: ['./formula-item.component.css'],
  host: {
    class: 'plots-formula-item'
  }
})
export class FormulaItemComponent implements OnInit {

  @Input()
  item!: FormulaItem

  constructor(private formulaListService: FormulaListService) { }


  ngOnInit(): void {
    console.log(this.item);
  }
  updatePlotColor(color: string) {
    this.item.color = color;
  }
  delete() {
    this.formulaListService.delete(this.item);
  }

}
