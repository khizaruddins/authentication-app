import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  // Add a cookie
  add(key: string, value: string, days: number = 7): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${key}=${value};expires=${expires.toUTCString()};path=/`;
  }

  // Get a specific cookie value
  get(key: string): string | null {
    const name = key + '=';
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split(';');
    for (const cookie of cookies) {
      let c = cookie.trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  // Delete a specific cookie
  delete(key: string): void {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }

  // Clear all cookies
  clear(): void {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const key = cookie.split('=')[0].trim();
      this.delete(key);
    }
  }
}
