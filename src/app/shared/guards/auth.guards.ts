import { CanMatchFn } from "@angular/router";
import { VarsService } from "../services/vars.service";
import { inject } from "@angular/core";

export const authGuard: CanMatchFn = (route, segments) => {
    const vars = inject(VarsService);
    return vars.isLoggedIn$;
}

export const notLoggedInGuard: CanMatchFn = (route, segments) => {
    const vars = inject(VarsService);
    return vars.isLoggedOut$;
}