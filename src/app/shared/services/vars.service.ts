import { Platform } from "@angular/cdk/platform";
import { isPlatformBrowser } from "@angular/common";
import { inject, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IMainLayout } from "../models/layout.interface";

@Injectable({
    providedIn:'root'
})
export class VarsService {
    isBrowser = false;
    isMobile = false;
    platform = inject(Platform);
    userData$ = new BehaviorSubject<null | any>(null); 
    mainLayoutConfig$ = new BehaviorSubject<IMainLayout>({
        showHeader: true,
        showFooter: true
    });
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
        this.isMobile = this.platform.ANDROID || this.platform.IOS;
    }

}