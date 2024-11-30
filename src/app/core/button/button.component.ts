import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from '../../shared/models/button.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-button',
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
  @Input() disabled = false;
  @Output() btnClick = new EventEmitter();
  onBtnClick(event: Event) {
    this.btnClick.emit(event);
  }
}
