import { Component, Input } from '@angular/core';
import { IInput } from '../../shared/models/input.interface';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({required: true}) config!: IInput;

  @Input({required: true}) control!: FormControl;
}
