import {Component} from '@angular/core';
import {IsCollapsible, ISystem, SystemsData} from './nesting.data';

@Component({
  selector: 'app-nesting',
  templateUrl: './nesting.component.html',
  styleUrls: ['./nesting.component.scss']
})

export class NestingTableComponent {
  systems: Array<ISystem>;

  constructor() {
    this.systems = SystemsData;
  }

  openNesting(item: IsCollapsible): void {
    item.IsOpened = !item.IsOpened;
  }

  tableHeaderCells(record) {
    return Object.keys(record.Computers[0]);
  }
}
