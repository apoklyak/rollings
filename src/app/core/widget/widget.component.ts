import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.template.html',
  styleUrls: ['./widget.style.scss']
})

export class WidgetComponent {
  @Input() title: string;
  @Input() description: string;
}
