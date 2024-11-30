import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  local = {
    add: (key: string, value: any): void => {
      if (this.isBrowser) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    get: (key: string): any => {
      if (this.isBrowser) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
      return null;
    },
    remove: (key: string): void => {
      if (this.isBrowser) {
        localStorage.removeItem(key);
      }
    },
    clear: (): void => {
      if (this.isBrowser) {
        localStorage.clear();
      }
    },
    append: (key: string, value: any): void => {
      if (this.isBrowser) {
        const existing = this.local.get(key) || [];
        this.local.add(key, [...existing, value]);
      }
    },
  };

  session = {
    add: (key: string, value: any): void => {
      if (this.isBrowser) {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    },
    get: (key: string): any => {
      if (this.isBrowser) {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
      return null;
    },
    remove: (key: string): void => {
      if (this.isBrowser) {
        sessionStorage.removeItem(key);
      }
    },
    clear: (): void => {
      if (this.isBrowser) {
        sessionStorage.clear();
      }
    },
  };
}
