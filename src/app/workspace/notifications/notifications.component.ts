import {Component} from '@angular/core';
import {PopupService} from '../../core/popup/popup.service'


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  constructor(
    private popupService: PopupService) {
  }

  openPopup(id: string) {
    this.popupService.onShowPopup(id);
  }

}
