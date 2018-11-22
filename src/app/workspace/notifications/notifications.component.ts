import {Component} from '@angular/core';
import {NotificationsService, PopupTypes} from './notifications.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  public popupTypes = PopupTypes;

  constructor(private notificationsService: NotificationsService) {
  }

  openPopup(popupPosition) {
    this.notificationsService.onShowPopup(popupPosition);
  }

}
