import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IInput } from '../../shared/models/input.interface';

import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-input',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({required: true}) config!: IInput;
  @Input({required: true}) control!: FormControl;
  @Input({required: true}) appearance: MatFormFieldAppearance = 'outline';
  @Input() formFieldClass: string = '';
  @ViewChild('passwordIconRef') passwordIconRef!: any;
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  show = false;

  showHidePassword() {
    this.show = !this.show;
    this.passwordIconRef._elementRef.nativeElement.textContent = this.show ? 'visibility': 'visibility_off';
    this.inputRef.nativeElement.type = this.show ? 'text': 'password';
  }
}
