import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from '../../shared/models/button.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true}) config!: IButton;
  @Output() btnClick = new EventEmitter();
  onBtnClick(event: Event) {
    this.btnClick.emit(event);
  }
}
