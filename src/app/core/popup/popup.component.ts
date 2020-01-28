import {Component, Input} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import {PopupService} from './popup.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.template.html',
  styleUrls: ['./popup.style.scss'],
  animations: [
    trigger('popup', [
      transition(':enter', [
        style({opacity: 0}),
        animate('.25s', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('.25s', style({opacity: 0}))
      ])
    ])
  ]
})

export class PopupComponent {
  @Input() popupPosition: string;
  public popupPositionBySubject = '';

  constructor(private popupService: PopupService) {
  }

  closePopup() {
    return this.popupPositionBySubject = '';
  }

  popupShow() {
    this.popupService.getPopupPosition().subscribe((position) => {
      this.popupPositionBySubject = position;
    });

    return this.popupPosition === this.popupPositionBySubject;
  }
}
