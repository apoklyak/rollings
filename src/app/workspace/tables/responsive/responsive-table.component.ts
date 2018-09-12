import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash/collection';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.style.scss']
})
export class ResponsiveTableComponent implements OnInit {
  public keys: string[];
  public keysOfCoins: string[];
  public keysOfCryptocurrency: string[];
  public isAsc = false;
  public clickedCell: string;
  public sorting: string;
  public active: boolean = false;
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
      'Assigned': 'Andrew D',
      'Reported': 'Mila M',
      'Status': {
        'Value': 87,
        'Status name': 'info'
      }
    },
    {
      'Task name': 'Task 4',
      'Estimate (hours)': 44,
      'Start date': '13.11.2017',
      'Assigned': 'Andrew E',
      'Reported': 'Mila M',
      'Status': {
        'Value': 67,
        'Status name': 'success'
      }
    },
    {
      'Task name': 'Task 4',
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
  public premierLeague = [
    {
      'Position': 1,
      'Team': 'Manchester City',
      'Plays': 29,
      'Wins': 25,
      'Draws': 3,
      'Losses': 1,
      'Points': 78
    },
    {
      'Position': 2,
      'Team': 'Manchester United',
      'Plays': 29,
      'Wins': 19,
      'Draws': 5,
      'Losses': 5,
      'Points': 62
    },
    {
      'Position': 3,
      'Team': 'Liverpool',
      'Plays': 29,
      'Wins': 17,
      'Draws': 9,
      'Losses': 3,
      'Points': 60
    }
  ];
  public coins = [
    {
      'Name': 'Bitcoin',
      'Market cap': '$313,770,211,602',
      'Price': '$18,732.90',
      'Volume 24h': '$13,682,700,000',
      'Change 24h': '-4.92%'
    },
    {
      'Name': 'Ethereum',
      'Market cap': '$69,922,664,823',
      'Price': '$725.21',
      'Volume 24h': '$2,426,860,000',
      'Change 24h': '1.22%'
    }
  ];

  public sort(key) {
    if (this.clickedCell === key) {
      this.sorting = this.isAsc ? 'asc' : 'desc';
    } else {
      this.isAsc = false;
      this.sorting = 'desc';
    }
    this.clickedCell = key;
    this.isAsc = !this.isAsc;
  }

  tasksSort(key: string) {
    this.sort(key);
    this.records = _.orderBy(this.records, key === 'Status' ? 'Status' + '.Value' : key, this.sorting);
  }

  premierLeagueSort(key: string) {
    this.sort(key);
    this.premierLeague = _.orderBy(this.premierLeague, key, this.sorting);
  }

  cryptocurrencySort(key: string) {
    this.sort(key);
    this.coins = _.orderBy(this.coins, key, this.sorting);
  }

  allCheckboxes() {
    this.active = !this.active;
  }

  ngOnInit() {
    this.keys = Object.keys(this.records[0]);
    this.keysOfCoins = Object.keys(this.premierLeague[0]);
    this.keysOfCryptocurrency = Object.keys(this.coins[0]);
  }

}
