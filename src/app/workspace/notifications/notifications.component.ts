import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export enum NotificationsTypes {
  Top = 'top',
  Center = 'center'
}

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
  public notificationsTypes = NotificationsTypes;
  public notificationStyle: string;

  selectNotification(type: NotificationsTypes) {
    this.notificationStyle = type.toString();
  }

  modalPosition() {
    return this.notificationStyle;
  }

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
    // this.notificationStyle = '';
  }

  ngOnInit() {
  }


}
