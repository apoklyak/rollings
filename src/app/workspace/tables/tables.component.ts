import {Component, OnChanges, OnInit} from '@angular/core';
import * as _ from 'lodash/collection';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.template.html',
  styleUrls: ['./tables.style.scss'],
  animations: [
    trigger('collapseChange', [
      state('false',
        style({
          height: '0',
          display: 'none'
        }),
      ),
      state('true',
        style({
          height: '*',
          display: 'block'
        })
      ),
      transition('true <=> false', animate('.5s ease-in'))
    ])
  ]
})
export class TablesComponent implements OnChanges, OnInit {
  public keys: string[];
  public isAsc = false;
  public collapse = false;
  public clickedField: string;
  public ordering: string;
  public active: boolean = false;

  // public records = [
  //     {
  //         'Task name': 'Task 1',
  //         'Estimate (hours)': 15,
  //         'Start date': '11.11.2017',
  //         'Assigned': 'Andrew M',
  //         'Reported': 'Mila M',
  //         'Status': '30'
  //     },
  //     {
  //         'Task name': 'Task 1',
  //         'Estimate (hours)': 15,
  //         'Start date': '12.11.2017',
  //         'Assigned': 'Andrew M',
  //         'Reported': 'Mila M',
  //         'Status': '10'
  //     },
  //     {
  //         'Task name': 'Task 1',
  //         'Estimate (hours)': 15,
  //         'Start date': '11.11.2017',
  //         'Assigned': 'Andrew M',
  //         'Reported': 'Mila M',
  //         'Status': '30'
  //     },
  //     {
  //         'Task name': 'Task 1',
  //         'Estimate (hours)': 15,
  //         'Start date': '11.11.2017',
  //         'Assigned': 'Andrew M',
  //         'Reported': 'Mila M',
  //         'Status': '20'
  //     }
  // ];

  public records = [
    {
      'Task name': 'Task 1',
      'Estimate (hours)': 65,
      'Start date': '19.11.2017',
      'Assigned': 'Andrew M',
      'Reported': 'Mila M',
      'Status': {
        'Value': 46,
        'Status name': 'danger'
      }
    },
    {
      'Task name': 'Task 2',
      'Estimate (hours)': 19,
      'Start date': '11.11.2017',
      'Assigned': 'Andrew M',
      'Reported': 'Mila M',
      'Status': {
        'Value': 10,
        'Status name': 'primary'
      }
    },
    {
      'Task name': 'Task 3',
      'Estimate (hours)': 45,
      'Start date': '11.11.2017',
      'Assigned': 'Andrew M',
      'Reported': 'Mila M',
      'Status': {
        'Value': 60,
        'Status name': 'warning'
      }
    },
    {
      'Task name': 'Task 4',
      'Estimate (hours)': 10,
      'Start date': '14.11.2017',
      'Assigned': 'Andrew M',
      'Reported': 'Mila M',
      'Status': {
        'Value': 87,
        'Status name': 'info'
      }
    },
    {
      'Task name': 'Task 5',
      'Estimate (hours)': 44,
      'Start date': '13.11.2017',
      'Assigned': 'Andrew M',
      'Reported': 'Mila M',
      'Status': {
        'Value': 67,
        'Status name': 'success'
      }
    },
    {
      'Task name': 'Task 6',
      'Estimate (hours)': 20,
      'Start date': '12.11.2017',
      'Assigned': 'Andrew M',
      'Reported': 'Mila M',
      'Status': {
        'Value': 20,
        'Status name': 'muted'
      }
    }
  ];

  sort(key: string) {
    if (this.clickedField === key) {
      this.ordering = this.isAsc ? 'asc' : 'desc';
    } else {
      this.isAsc = false;
      this.ordering = 'desc';
    }
    this.clickedField = key;
    this.isAsc = !this.isAsc;
    this.records = _.orderBy(this.records, [key], [this.ordering]);

  }

  allCheckboxes() {
    this.active = !this.active;
  }

  qwe() {
    return this.collapse = !this.collapse;
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.keys = Object.keys(this.records[0]);
  }

}
