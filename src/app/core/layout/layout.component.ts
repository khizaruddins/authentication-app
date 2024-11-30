import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { VarsService } from '../../shared/services/vars.service';
import { IMainLayout } from '../../shared/models/layout.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  vars = inject(VarsService);
  layoutConfig: IMainLayout = {showHeader: true, showFooter: true};

  ngOnInit() {
    this.vars.mainLayoutConfig$.subscribe({next: val =>  {
      this.layoutConfig = val;
      console.log(this.layoutConfig);
    }})
  }
}
