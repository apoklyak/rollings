import {Component} from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-all-icons',
  templateUrl: './all-icons.component.html',
  styleUrls: ['./all-icons.component.scss']
})
export class AllIconsComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
      }

}
