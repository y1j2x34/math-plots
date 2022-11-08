import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlotColorListService {
  readonly colors = new Set([
    '#2f3542', '#747d8c', '#57606f', '#a4b0be', '#ced6e0', '#f1f2f6', '#dfe4ea', '#ffffff',
    '#ff4757', '#ff6348', '#ffa502', '#ff6b81', '#ff7f50', '#eccc68','#3742fa', '#1e90ff', '#2ed573',
    '#5352ed', '#70a1ff', '#7bed9f'
  ]);
  customColors = new Set<string>();
  colorIndex = -1;
  constructor() {
    const colorList = localStorage.getItem('customColors');
    if(colorList) {
      this.customColors = new Set(
        JSON.parse(colorList) as string[]
      );
    }
  }

  addColor(color: string) {
    this.customColors.add(color);
    localStorage.setItem('customColors', JSON.stringify(Array.from(this.customColors)));
  }
  getNextColor() {
    const index = (this.colorIndex ++) % this.colors.size;
    this.colorIndex = index;
    return Array.from(this.colors)[index];
  }
}
