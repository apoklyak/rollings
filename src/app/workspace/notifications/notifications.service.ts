import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export enum PopupTypes {
  Top = 'top',
  Center = 'center'
}

@Injectable()
export class NotificationsService {
  private showPopup = new Subject<any>();

  onShowPopup(state) {
    this.showPopup.next(state);
  }

  getPopupPosition(): Observable<any> {
    return this.showPopup.asObservable();
  }
}
