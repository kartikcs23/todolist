import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  isChecked: boolean = false;

  toggleChanged(event: any) {
    this.isChecked = event.checked;
  }

}
