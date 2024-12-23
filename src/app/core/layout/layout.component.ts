import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { VarsService } from '../../shared/services/vars.service';
import { IMainLayout } from '../../shared/models/layout.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-layout',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  vars = inject(VarsService);
  layoutConfig: IMainLayout | null = null;
  destroyRef = inject(DestroyRef);

  ngAfterViewInit() {
    const val = this.vars.mainLayoutConfig$.subscribe({next: val =>  {
      this.layoutConfig = val;
      console.log(val);
    }})
    this.destroyRef.onDestroy(() => {
      val.unsubscribe();
    })
  }

}
