import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class PopupService {

  private showPopup = new Subject<any>();

  onShowPopup(state) {
    this.showPopup.next(state);
  }

  getPopupPosition(): Observable<any> {
    return this.showPopup.asObservable();
  }
}
