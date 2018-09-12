import {Component} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@Component({
  selector: 'app-all-icons',
  templateUrl: './all-icons.component.html',
  styleUrls: ['./all-icons.component.scss']
})
export class AllIconsComponent {

}
