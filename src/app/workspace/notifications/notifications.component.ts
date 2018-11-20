import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('popupDisplay', [
      state('false',
        style({opacity: 0, display: 'none'})
      ),
      state('true',
        style({opacity: 1, display: 'flex'})
      ),
      transition('false => true', animate('.25s',
        style({opacity: 1}),
      )),
      transition('true => false', animate('.25s',
        style({opacity: 0}),
      ))
    ])
  ]
})
export class NotificationsComponent implements OnInit {

  public modal: boolean = false;
  public centerPosition: boolean = false;

  closeModal() {
    this.modal = false;
  }

  openModal(position) {
    if (position == undefined) {
      this.centerPosition = false;
      this.modal = true;
    }

    if (arguments.length > 0) {
      this.centerPosition = true;
      this.modal = true;
    }

  }

  ngOnInit() {
  }


}
