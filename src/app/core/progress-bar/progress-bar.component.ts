import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.template.html',
  styleUrls: ['./progress-bar.style.scss']
})

export class ProgressBarComponent {
  @Input() scale: number;
  @Input() height: number;
  @Input() color: string;
  @Input() animated: boolean;
}
