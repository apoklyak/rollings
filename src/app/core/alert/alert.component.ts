import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.template.html',
  styleUrls: ['./alert.style.scss']
})

export class AlertComponent {
  @Input() message: string;
  @Input() alertType: string;
  @Input() alertStyle: string;
}
