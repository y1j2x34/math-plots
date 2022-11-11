import { Component, OnInit } from '@angular/core';
import { FormulaListService } from '../formula-list.service';
import { PlotColorListService } from '../plot-color-list.service';

@Component({
  selector: 'formula-list',
  templateUrl: './formula-list.component.html',
  styleUrls: ['./formula-list.component.css'],
  host: {
    class: 'plots-formula-list'
  }
})
export class FormulaListComponent implements OnInit {

  constructor(public service: FormulaListService, public colorService: PlotColorListService) { }

  ngOnInit(): void {
    this.addFomula('');
  }

  addFomula(text: string) {
    this.service.add(text, this.colorService.getNextColor());
  }
}
