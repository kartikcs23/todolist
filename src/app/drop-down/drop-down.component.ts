import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [MatMenuModule,MatButtonModule,MatIcon],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {

}
