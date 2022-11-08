import { Injectable } from '@angular/core';
import { FormulaItem } from './formula/formulaItem';

@Injectable({
  providedIn: 'root'
})
export class FormulaListService {

  public formulas = new Set<FormulaItem>();
  constructor() { }

  add(formula: string, color: string) {
    this.formulas.add(new FormulaItem(formula, color));
    console.log(formula);
  }
  delete(formula: FormulaItem) {
    this.formulas.delete(formula);
  }
}
