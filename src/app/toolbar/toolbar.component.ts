import { Component, OnInit } from '@angular/core';
import { FormulaListService } from '../formula-list.service';
import { PlotColorListService } from '../plot-color-list.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  host: {
    class: 'polts-toolbar'
  }
})
export class ToolbarComponent implements OnInit {

  constructor(
    private formulaListService: FormulaListService,
    private colorService: PlotColorListService
  ) { }

  ngOnInit(): void {
  }
  addFormulaItem() {
    this.formulaListService.add('', this.colorService.getNextColor());
  }
}
