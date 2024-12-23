import { Platform } from "@angular/cdk/platform";
import { isPlatformBrowser } from "@angular/common";
import { inject, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import {map} from 'rxjs/operators';

import { IMainLayout } from "../models/layout.interface";
import { IUser } from "../models/user.model";

export const ANONYMOUS_USER: IUser = {
    id: undefined,
    email: '',
    name: ''
}

@Injectable({
    providedIn:'root'
})
export class VarsService {
    isBrowser = false;
    isMobile = false;
    platform = inject(Platform);
    userSubject$ = new BehaviorSubject(ANONYMOUS_USER);

    userData$: Observable<IUser> = this.userSubject$.asObservable();

    isLoggedIn$: Observable<boolean> = this.userData$.pipe(map(user => !!user.id));

    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedin => !isLoggedin));

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