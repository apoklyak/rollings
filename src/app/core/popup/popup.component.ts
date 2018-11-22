import {Component, Input} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {NotificationsService} from '../../workspace/notifications/notifications.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.template.html',
  styleUrls: ['./popup.style.scss'],
  animations: [
    trigger('popup', [
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

export class PopupComponent {
  @Input() popupPosition: string;
  public popupPositionBySubject = '';

  constructor(private notificationsService: NotificationsService) {

  }

  closePopup() {
    return this.popupPositionBySubject = '';
  }


  popupShow() {
    this.notificationsService.getPopupPosition().subscribe((position) => {
      this.popupPositionBySubject = position;
    });

    return this.popupPosition === this.popupPositionBySubject;
  }

}
